<template>
  <div class="profile-body">

    <Navbar/>

    <div class="profile">
      <h1>Profile</h1>

      <div>Firstname:</div>{{ userData.firstname }}<hr><br>

      <div>Lastname:</div>{{ userData.lastname }}<hr><br>

      <div>e-mail:</div>{{ userData.email }}<hr><br>

      <div>date of birth:</div>
      {{ moment(userData.date_of_birth).format('DD.MM.YYYY') }}<hr><br>

      <button @click.prevent="guestbookRoute">
        guestbook
      </button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar,
  },
  name: 'Profile',
  data() {
    return {
      userData: {},
    };
  },

  created() {
    this.moment = moment;
    this.fetchUser();
  },

  methods: {
    guestbookRoute() {
      this.$router.push({
        name: 'guestbook',
      });
    },

    async fetchUser() {
      const requestOptions = {
        method: 'GET',
        credentials: 'include',
      };
      const fetchUserAuth = await fetch('http://127.0.0.1:1337/api/profile', requestOptions);
      if (fetchUserAuth.status === 202) {
        const [{ firstname, lastname, email, date_of_birth }] = await fetchUserAuth.json();
        this.userData = { firstname, lastname, email, date_of_birth };
      }
    },
  },
};
</script>
