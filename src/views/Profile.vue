<template>
   <div class="profile-body">
      <div class="profile">
          <h1>Profile {{ this.$route.params.id }}</h1>

          <div>Firstname:</div>{{ this.$route.params.firstname }}<hr><br>

          <div>Lastname:</div>{{ this.$route.params.lastname }}<hr><br>

          <div>e-mail:</div>{{ this.$route.params.email }}<hr><br>

          <div>date of birth:</div>

          {{ moment(this.$route.params.date_of_birth).format('DD.MM.YYYY') }}<hr><br>

          <button @click.prevent="guestbookRoute">
            guestbook
          </button>

          <button @click.prevent="guestbookId">
            id
          </button>

          <button @click.prevent="guestbookIdGet">
            id get
          </button>
      </div>
   </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Profile',
  created() {
    this.moment = moment;
  },

  methods: {
    guestbookRoute() {
      const { id } = this.$route.params;
      this.$router.push({
        name: 'guestbook',
        params: { id },
      });
    },

    async guestbookId() {
      const { id } = this.$route.params;
      const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      };
      const fetchGuestbook = await fetch('http://127.0.0.1:1337/add', requestOptions);
      if (fetchGuestbook.ok) {
        console.log('GO GO GO');
      }
    },

    guestbookIdGet() {
      const requestOptions = {
        method: 'GET',
        credentials: 'include',
      };
      fetch('http://127.0.0.1:1337/add', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
};
</script>

<style>

</style>
