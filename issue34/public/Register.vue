<template>
   <div>
      <h1>registration</h1>
      <form action="/register" method="post">
         <label>Firstname</label><br>
         <input type="text" name="firstname" /><br><br>

         <label>Lastname</label><br>
         <input type="text" name="lastname" /><br><br>

         <label>password</label><br>
         <input type="password" name="password" /><br><br>

         <label>confirm password</label><br>
         <input type="password" name="confirm_password" /><br><br>

         <label>e-mail</label><br>
         <input type="email" name="email" /><br><br>

         <label>date of birth</label><br>
         <input type="date" name="date_of_birth" /><br><br>
         
         <input type="submit" value="send" />
      </form>
   </div>
</template>

<script>
export default {
   name: 'Register'
}
</script>