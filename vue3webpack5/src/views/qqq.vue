<template>
   <div>
      <h1>login</h1>

      <label>e-mail<br>
         <input v-model="email" type="email" name="email" placeholder="enter your email"/>
      </label><br><br>

      <label>password<br>
         <input v-model="password" type="password" name="password" placeholder="enter your password"/>
      </label><br><br>

      <button @click.prevent="fetchUserData">log in</button>

      <button @click.prevent="this.$router.push('register')">registration</button>

      <p v-if="getObject">redirection to your profile</p>
   </div>
</template>

<script>
export default {
   name: 'Login',
   data() {
      return {
         email: '',
         password: '',
         fetchData: '',
      }
   },
   computed: {
      getObject() {
         const object = this.fetchData[0]
         if(object) this.$router.push({ 
            name: 'profile', 
            params: { 
               firstname: object.firstname,
               lastname: object.lastname,
               email: object.email,
               date_of_birth: object.date_of_birth
            } 
         })
      }
   },  
   methods: {
      fetchUserData() {
         fetch(`http://127.0.0.1:1337/api?login=true&email=${this.email}&password=${this.password}`)
            .then(response => response.json())
            .then(data => this.fetchData = data);
         this.email = ''
         this.password = ''
      }
   }
}
</script>