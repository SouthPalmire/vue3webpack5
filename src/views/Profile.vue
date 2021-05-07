<template>
   <div class="profile-body">
      <div class="profile">
         <h1>Profile {{ this.$route.params.id }}</h1> 

         <div>Firstname:</div>{{ this.$route.params.firstname }}<hr><br>

         <div>Lastname:</div>{{ this.$route.params.lastname }}<hr><br>

         <div>e-mail:</div>{{ this.$route.params.email }}<hr><br>

         <div>date of birth:</div>{{ moment(this.$route.params.date_of_birth).format('DD.MM.YYYY') }}<hr><br>

         <button @click.prevent="guestbookRoute">
            guestbook
         </button>
      </div>
   </div>
</template>

<script>
import moment from 'moment'
export default {
   name: 'Profile',
   created() {
      this.moment = moment
   },

   methods: {
      guestbookRoute() {
         const id = this.$route.params.id
         this.$router.push({ 
            name: 'guestbook', 
            params: { id } 
         })
      }
   }
}
</script>

<style>

</style>