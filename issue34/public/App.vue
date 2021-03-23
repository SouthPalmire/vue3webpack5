<template>
   <div id="text">

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
      }
   }
}
</script>

<style>
</style>