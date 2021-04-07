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
      
      <ul v-show="errors" style="color: red">
         <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
   </div>
</template>

<script>
export default {
   name: 'Login',
   data() {
      return {
         email: '',
         password: '',
         errors: []
      }
   },  
   methods: {
      async fetchUserData() {
         this.errors = []
         const { email, password } = this
         const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
         }
         const fetchLogin = await fetch('http://127.0.0.1:1337/api/?login=true', requestOptions)

         if (fetchLogin.ok) {
            let json = await fetchLogin.json()
            this.$router.push({ 
               name: 'profile', 
               params: { 
                  firstname: json[0].firstname,
                  lastname: json[0].lastname,
                  email: json[0].email,
                  date_of_birth: json[0].date_of_birth
               } 
            })
         } else {
            this.errors.push(await fetchLogin.json())
            this.email = ''
            this.password = ''
         }
      }
   }
}
</script>