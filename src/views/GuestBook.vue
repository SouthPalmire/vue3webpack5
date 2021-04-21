<template>
   <div v-for="(comment, index) in comments" :key="index">
      <div>
         {{ comment.lastname }} {{ comment.firstname }}  {{ moment(comment.date_time).format('DD.MM.YYYY [&nbsp;] HH:mm') }}
      </div>
      <div>
         {{ comment.theme }} 
      </div>
      <div>
         {{ comment.text }}
      </div><hr>
   </div>

   <input type="text" v-model="userTheme">theme<br>
   <input type="text" v-model="userText">text<br>
   <button @click="postUserComment">send comment</button>
</template>

<script>
import moment from 'moment'

export default {
   name: 'GuestBook',
   data() {
      return {
         comments: '',
         userText: '',
         userTheme: ''
      }
   },
   created() {
      this.fetchComments()
      this.moment = moment
   },
   methods: {
      fetchComments() {
         fetch('http://127.0.0.1:1337/api/guestbook')
            .then(response => response.json())
            .then(data => this.comments = data)
      },
      async postUserComment() {
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
            this.fetchComments()
            this.userText = ''
            this.userTheme = ''
         }
      }
   }
}
</script>
