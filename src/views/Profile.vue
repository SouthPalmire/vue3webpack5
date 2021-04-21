<template>
   <div>
      <h1>Profile</h1> 

         <p>Firstname:</p>{{ this.$route.params.firstname }}<hr><br>

         <p>Lastname:</p>{{ this.$route.params.lastname }}<hr><br>

         <p>e-mail:</p>{{ this.$route.params.email }}<hr><br>

         <p>date of birth:</p>{{ this.$route.params.date_of_birth }}<hr><br>

         <button @click="guestbook">guestbook</button>
   </div>
</template>

<script>
export default {
   name: 'Profile',
   data() {
      return{

      }
   },
   methods: {
      guestbook() {
         const id = this.$route.params.id
         this.$router.push({ 
            name: 'guestbook', 
            params: { id } 
         })
      }
   }
}
</script>