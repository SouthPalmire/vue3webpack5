<template>
   <div>
      <h1>Profile</h1>

         <p>Firstname:</p>{{ this.$route.params.firstname }}<hr><br>

         <p>Lastname:</p>{{ this.$route.params.lastname }}<hr><br>

         <p>e-mail:</p>{{ this.$route.params.email }}<hr><br>

         <p>date of birth:</p>{{ this.$route.params.date_of_birth }}<hr><br>

   </div>
</template>

<script>
export default {
   name: 'Profile'
}
</script>