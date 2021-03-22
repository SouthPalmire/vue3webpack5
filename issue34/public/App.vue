<template>
   <div id="text">
      <input v-model="getText" type="text">
      <hr/>
      {{ getText }}
      <router-link to="/register">Перейти к register</router-link>
      <router-link to="/profile">Перейти к profile</router-link>
      <router-link to="/login">Перейти к login</router-link>

      <router-view></router-view>
   </div>
</template>

<script>
export default {
   name: 'app',
   data() {
      return {
         getText: ''
      }
   }
}
</script>

<style>
   #text {
      color: blue;
   }
</style>