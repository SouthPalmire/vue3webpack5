<template>
   <div>
      <h1>registration</h1>

      <form @submit.prevent="fetchUserData">
         <label>Firstname<br>
            <input 
               v-model="firstname"
               @blur="v$.firstname.$touch()"
               type="text" 
               name="firstname" 
            />
         </label><br><br>

         <label>Lastname<br>
            <input 
               v-model="lastname"
               @blur="v$.lastname.$touch()"
               type="text"
               name="lastname"
            />
         </label><br><br>

         <label>password<br>
            <input 
               v-model="passwordCreate"
               @blur="v$.passwordCreate.$touch()"
               type="password"
            />
         </label><br><br>

         <label>confirm password<br>
            <input 
               v-model="confirmPasswordCreate"
               @blur="v$.confirmPasswordCreate.$touch()"
               type="password"
            />
         </label><br><br>

         <label>e-mail<br>
            <input 
               v-model="email" 
               @blur="v$.email.$touch()"
               name="email" 
               type="email"
            />
         </label><br><br>

         <label>date of birth<br>
            <input 
               v-model="date_of_birth"
               @blur="v$.date_of_birth.$touch()"
               type="date"
            />
         </label><br><br>

         <button type="submit">
            register
         </button>
      </form>

      <p v-show="errors">{{ errors }}</p>
   </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
   name: 'Register',
   setup() {
       return { v$: useVuelidate() }
   },
   validations() {
      return {
         firstname: {
            required,
            email
         },
         lastname: {
            required
         },
         passwordCreate: {
            required
         },
         confirmPasswordCreate: {
            required
         },
         email: {
            required
         },
         date_of_birth: {
            required
         }
      }
   },
   data() {
      return {
         firstname: '',
         lastname: '',
         passwordCreate: '',
         confirmPasswordCreate: '',
         email: '',
         date_of_birth: '',
         errors: ''
      }
   },
   methods: {
      async fetchUserData() {
         const { firstname, lastname, passwordCreate, confirmPasswordCreate, email, date_of_birth } = this
         const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname, lastname, passwordCreate, email, date_of_birth })
         }
         const fetchRegister = await fetch('http://127.0.0.1:1337/api/?registration=true', requestOptions)

         if (fetchRegister.ok) {
            let json = await fetchRegister.json()
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
            this.errors = await fetchRegister.json()
            this.firstname = ''
            this.lastname = ''
            this.email = ''
            this.passwordCreate = ''
            this.confirmPasswordCreate = ''
            this.date_of_birth = ''
         }
      }
   }
}
</script>