<template>
   <div>
      <button @click="fetchUser">fetch</button>
      {{ massive }}
      <h1>login</h1>
      <form action="/register" method="post">
         <label>e-mail</label><br>
         <input type="email" name="email" /><br><br>

         <label>password</label><br>
         <input type="password" name="password" /><br><br>
         
         <input type="submit" value="send" />
      </form> 
   </div>
</template>

<script>
export default {
   name: 'Login',
   data() {
      return {
         massive: []
      }
   },
   methods: {
      fetchUser() {
         fetch('http://127.0.0.1:1337/api')
          .then(response => response.json())
          .then(data => this.massive = data)
      }
   }
}
</script>