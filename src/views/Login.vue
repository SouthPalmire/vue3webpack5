<template>
   <div>
      <h1>login</h1>

      <form @submit.prevent="fetchUserData">
         <label>e-mail<br>
            <input 
               v-model="email"
               @blur="v$.email.$touch()"
               type="email" 
               name="email" 
               placeholder="enter your email"
            />
         <p v-show="v$.email.$invalid && v$.email.$dirty && !this.errors">please enter your email</p>
         </label><br><br>

         <label>password<br>
            <input 
               v-model="password"
               @blur="v$.password.$touch()"
               type="password" 
               placeholder="enter your password"
            />
         <p v-show="v$.password.$invalid && v$.password.$dirty && !this.errors">please enter your password</p>
         </label><br><br>

         <button type="submit" :disabled="v$.email.$invalid || v$.password.$invalid">
            log in
         </button>

         <button @click.prevent="this.$router.push('register')">
            registration
         </button>
      </form>

      <p v-show="errors">{{ errors }}</p>
   </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
   name: 'Login',
   setup() {
       return { v$: useVuelidate() }
   },
   validations() {
      return {
         email: {
            required,
            email
         },
         password: {
            required
         }
      }
   },
   data() {
      return {
         email: '',
         password: '',
         errors: ''
      }
   },
   methods: {
      async fetchUserData() {
         this.errors = ''
         const { email, password } = this
         const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
         }
         const fetchLogin = await fetch('http://127.0.0.1:1337/api/login', requestOptions)

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
            this.errors = await fetchLogin.json()
            this.email = ''
            this.password = ''
         }
      }
   }
}
</script>
