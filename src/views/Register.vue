<template>
   <div class="register-body">
      <div class="register">
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
            <p v-show="v$.firstname.$invalid && v$.firstname.$dirty && !this.errors">
               please enter your firstname
            </p>

            <label>Lastname<br>
               <input
                  v-model="lastname"
                  @blur="v$.lastname.$touch()"
                  type="text"
                  name="lastname"
               />
            </label><br><br>
            <p v-show="v$.lastname.$invalid && v$.lastname.$dirty && !this.errors">
               please enter your lastname
            </p>

            <label>password<br>
               <input
                  v-model="passwordCreate"
                  @blur="v$.passwordCreate.$touch()"
                  type="password"
               />
            </label><br><br>
            <p v-show="v$.passwordCreate.$invalid && v$.passwordCreate.$dirty && !this.errors">
               please enter your password
            </p>

            <label>confirm password<br>
               <input
                  v-model="confirmPasswordCreate"
                  @blur="v$.confirmPasswordCreate.$touch()"
                  type="password"
               />
            </label><br><br>
            <p v-show="v$.confirmPasswordCreate.$invalid && v$.confirmPasswordCreate.$dirty && !this.errors">
               please confirm your password
            </p>

            <label>e-mail<br>
               <input
                  v-model="email"
                  @blur="v$.email.$touch()"
                  name="email"
                  type="email"
               />
            </label><br><br>
            <p v-show="v$.email.$invalid && v$.email.$dirty && !this.errors">
               please enter your email
            </p>

            <label>date of birth<br>
               <input
                  v-model="date_of_birth"
                  @blur="v$.date_of_birth.$touch()"
                  type="date"
               />
            </label><br><br>
            <p v-show="v$.date_of_birth.$invalid && v$.date_of_birth.$dirty && !this.errors">
               please enter date of birth
            </p>

            <button type="submit" :disabled="btnDisable">
               register
            </button>
         </form>

         <p v-show="errors">{{ errors }}</p>
      </div>
   </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, alpha, sameAs } from '@vuelidate/validators';

export default {
  name: 'Register',
  setup() {
    return { v$: useVuelidate() };
  },

  validations() {
    return {
      firstname: {
        required,
        alpha,
      },
      lastname: {
        required,
        alpha,
      },
      passwordCreate: {
        required,
      },
      confirmPasswordCreate: {
        sameAs: sameAs(this.passwordCreate),
      },
      email: {
        required,
        email,
      },
      date_of_birth: {
        required,
      },
    };
  },

  data() {
    return {
      firstname: '',
      lastname: '',
      passwordCreate: '',
      confirmPasswordCreate: '',
      email: '',
      date_of_birth: '',
      errors: '',
    };
  },

  computed: {
    btnDisable() {
      return this.v$.firstname.$invalid
          || this.v$.lastname.$invalid
          || this.v$.passwordCreate.$invalid
          || this.v$.confirmPasswordCreate.$invalid
          || this.v$.email.$invalid
          || this.v$.date_of_birth.$invalid;
    },
  },

  methods: {
    async fetchUserData() {
      const {
        firstname, lastname, passwordCreate, email, date_of_birth,
      } = this;
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname, lastname, passwordCreate, email, date_of_birth,
        }),
      };
      const fetchRegister = await fetch('http://127.0.0.1:1337/api/register', requestOptions);

      if (fetchRegister.ok) {
        const json = await fetchRegister.json();
        this.$router.push({
          name: 'profile',
          params: {
            id: json[0].id,
            firstname: json[0].firstname,
            lastname: json[0].lastname,
            email: json[0].email,
            date_of_birth: json[0].date_of_birth,
          },
        });
      } else {
        this.errors = await fetchRegister.json();
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.passwordCreate = '';
        this.confirmPasswordCreate = '';
        this.date_of_birth = '';
      }
    },
  },
};
</script>

<style>
.register-body {
  background-color: rgb(196, 194, 194);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
}

.register {
  text-align: center;
  width: 250px;
  height: 515px;
  background-color: grey;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>
