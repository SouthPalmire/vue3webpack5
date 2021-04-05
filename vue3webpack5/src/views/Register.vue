<template>
   <div>
      <h1>registration</h1>

      <label>Firstname<br>
         <input v-model="firstname" type="text" name="firstname" />
      </label><br><br>

      <label>Lastname<br>
         <input v-model="lastname" type="text"/>
      </label><br><br>

      <label>password<br>
         <input v-model="passwordCreate" type="password"/>
      </label><br><br>

      <label>confirm password<br>
         <input v-model="confirmPasswordCreate" type="password"/>
      </label><br><br>

      <label>e-mail<br>
         <input v-model="email" name="email" type="email"/>
      </label><br><br>

      <label>date of birth<br>
         <input v-model="date_of_birth" type="date"/>
      </label><br><br>

      <button @click.prevent="fetchUserData">register</button>
   </div>
</template>

<script>
export default {
   name: 'Register',
   data() {
      return {
         firstname: '',
         lastname: '',
         passwordCreate: '',
         confirmPasswordCreate: '',
         email: '',
         date_of_birth: '',
         fetchData: ''
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
            body: JSON.stringify({ firstname, lastname, passwordCreate, confirmPasswordCreate, email, date_of_birth })
         }
         const fetchRegister = await fetch('http://127.0.0.1:1337/api/?registration=true', requestOptions)

         if (fetchRegister.status === 201) {
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
         }

         this.firstname = ''
         this.lastname = ''
         this.email = ''
         this.passwordCreate = ''
         this.confirmPasswordCreate = ''
         this.date_of_birth = ''
      }
   }
}
</script>