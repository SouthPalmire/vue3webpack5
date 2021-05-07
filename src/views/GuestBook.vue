<template>
   <div>
      <div class="post" v-for="( note, index ) in notes" :key="index">
         <div class="post-body">
            <div>
               {{ note.firstname }} {{ note.lastname }}
               {{ moment(note.date_time).format('DD.MM.YYYY [&nbsp;] HH:mm') }}
            </div>
            <div>
               Theme: {{ note.theme }}
            </div>
            <div>
               {{ note.text }}
            </div><hr>
         </div>
         
         <a class="comment-inf"
            href="#" 
            @click.prevent="fetchComments(note.id_gb)" 
            v-if="note.last_comment_time && note.number_of_comments"
         >
            {{ note.number_of_comments }} comments, last created {{ moment(note.last_comment_time).fromNow() }} 
         </a>
         <div v-else>
            no comments yet
         </div><hr>

         <div v-if="comments[note.id_gb]">
            <div v-if="filteredComments.length">
               <div v-for="( comment, index ) in filteredComments" :key="index">
                  <div class="post-comment" v-for="( c, index ) in comment" :key="index">
                     {{ moment(c.comment_date_time).fromNow() }}
                     by {{ c.firstname }} {{ c.lastname }}: <br>
                     {{ c.comment_text }}
                  </div>
               </div>
            </div>
         </div>

         <a href="#" class="comment-show_input" @click="showComment(index)">create comment</a>

         <div class="comment-input" v-show="showCommentMassive[index]">
            <input v-model="commentText[index]" type="text" placeholder="enter comment">
            <button @click="postUserComment(note.id_gb)" v-if="commentText[index]">send</button>
         </div>
      </div>

      <button @click="prevPage" :disabled="offsetNotes == 0">
         previous
      </button>

      <button @click="nextPage" :disabled="notes.length < 3">
         next
      </button><hr>

      <input type="text" v-model="userTheme" placeholder="theme"><br>
      <input type="text" v-model="userText" placeholder="text"><br>

      <button @click.prevent="postUserNote" :disabled="userText && userTheme === ''">
         send comment
      </button>
   </div>
</template>

<script>
import moment from 'moment'
export default {
   name: 'GuestBook',
   data() {
      return {
         notes: [],
         comments: [],
         userText: '',
         userTheme: '',
         commentText: [],
         offsetNotes: 0,
         limitNotes: 3,
         showCommentMassive: []
      }
   },

   created() {
      this.fetchNotes()
      this.moment = moment
   },

   watch: {
      offsetNotes(value) {
         this.fetchNotes(value)
      }
   },

   computed: {
      filteredComments() {
         return this.comments.filter( element => element != null )
      }
   },

   methods: {
      fetchNotes(value) {
         const { limitNotes, offsetNotes } = this
         fetch(`http://127.0.0.1:1337/api/guestbook?limit=${limitNotes}&offset=${value || offsetNotes}`)
            .then(response => response.json())
            .then(data => this.notes = data)
      },

      fetchComments(id) {
         this.comments = []
         fetch(`http://127.0.0.1:1337/api/guestbook/comments?id=${id}`)
            .then(response => response.json())
            .then(data => this.comments[id] = data)
      },

      async postUserNote() {
         const userId = this.$route.params.id
         const { userText, userTheme } = this
         const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userText, userTheme, userId })
         }
         const fetchGuestbook = await fetch('http://127.0.0.1:1337/api/guestbook', requestOptions)
         if (fetchGuestbook.ok) {
            this.fetchNotes()
            this.userText = ''
            this.userTheme = ''
         }
      },

      async postUserComment(id) {
         const userId = this.$route.params.id
         const { commentText } = this
         const filteredCommentText = commentText.filter( element => element != null )

         const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, userId, filteredCommentText })
         }
         const fetchGuestbook = await fetch('http://127.0.0.1:1337/api/guestbook/comments', requestOptions)
         if (fetchGuestbook.ok) {
            this.fetchComments(id)
            this.fetchNotes()
            this.commentText = []
         }
      },

      showComment(index) {
         this.showCommentMassive = []
         this.showCommentMassive[index] = true
      },

      prevPage() {
         this.offsetNotes = this.offsetNotes - this.limitNotes
         this.showCommentMassive = []
      },

      nextPage() {
         this.offsetNotes = this.offsetNotes + this.limitNotes
         this.showCommentMassive = []
      }
   }
}
</script>

<style>
.post {
   background-color: grey;
   border: 2px solid;
   border-radius: 10px;
   margin: 10px;
   padding: 10px;
}

.post-comment {
   background-color: lightgray;
   border: 2px solid;
   border-radius: 10px;
   margin-top: 10px;
   margin-bottom: 10px;
   padding: 10px;
}

.comment-show_input {
   margin: 10px;
}

.comment-input {
   margin: 10px;
}
</style>