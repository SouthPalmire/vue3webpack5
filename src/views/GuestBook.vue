<template>
   <div>
      <div v-for="( page, index ) in computedPage" :key="index">
         <div>
            {{ page.firstname }} {{ page.lastname }}
            {{ moment(page.date_time).format('DD.MM.YYYY [&nbsp;] HH:mm') }}
         </div>
         <div>
            {{ page.theme }}
         </div>
         <div>
            {{ page.text }}
         </div><hr>
      </div>

      <button @click="pageNumber--" :disabled = "pageNumber == 0">
         previous
      </button>
      <button @click="pageNumber++" :disabled = "pageNumber >= pageCount-1">
         next
      </button><hr>

      <input type="text" v-model="userTheme">theme<br>
      <input type="text" v-model="userText">text<br>

      <button @click.prevent="postUserComment">
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
         comments: [],
         userText: '',
         userTheme: '',
         pageNumber: 0,
         pageSize: 7
      }
   },

   created() {
      this.fetchComments()
      this.moment = moment
   },

   computed: {
      pageCount() {
         const length = this.comments.length
         const size = this.pageSize
         return Math.ceil(length/size)
      },

      computedPage() {
         const start = this.pageNumber * this.pageSize
         const end = start + this.pageSize
         return this.comments.slice(start, end)
      }
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
