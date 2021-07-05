<template>
  <div>
    <router-link to="/profile" tag="butto">профиль</router-link>
    <router-link to="/guestbook" tag="li">гостевая книга</router-link>
    <router-link v-if="!$store.state.isAuth" to="/login" tag="li">вход</router-link>
    <router-link v-else to="/" tag="li">выход</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>
