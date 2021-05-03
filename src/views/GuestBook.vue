<template>
   <div>
      <div v-for="( note, index ) in notes" :key="index">
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

         <a href="#" @click.prevent="fetchComments(note.id_gb)" v-if="note.last_comment_time && note.number_of_comments">
            {{ note.number_of_comments }} comments, last created {{ moment(note.last_comment_time).fromNow() }} 
         </a>
         <a v-else>
            no comments yet
         </a><hr>
             
         <div v-if="comments[note.id_gb]">
            <div v-if="filteredComments.length">
               <div v-for="( comment, index ) in filteredComments" :key="index">
                  <div v-for="( c, index ) in comment" :key="index">
                     {{ moment(c.comment_date_time).fromNow() }}<br>
                     {{ c.comment_text }}
                  </div>
               </div>
            </div>

            <div v-else class="spinner-border" role="status">
               <span class="sr-only">Loading...</span>
            </div>
         </div>

         
         
         <input v-model="commentText[index]" type="text" placeholder="enter comment">
         <button @click="postUserComment(note.id_gb)" v-if="commentText[index]">send</button><hr>
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
         limitNotes: 3
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
         const { commentText } = this
         const filteredCommentText = commentText.filter( element => element != null )

         const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, filteredCommentText })
         }
         const fetchGuestbook = await fetch('http://127.0.0.1:1337/api/guestbook/comments', requestOptions)
         if (fetchGuestbook.ok) {
            this.fetchNotes()
            this.commentText = []
         }
      }, 

      prevPage() {
         this.offsetNotes = this.offsetNotes - this.limitNotes
      },

      nextPage() {
         this.offsetNotes = this.offsetNotes + this.limitNotes
      }
   }
}
</script>
