<template>
   <div id="app">
   <!-- <router-view /> -->
    {{ some }}
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         some: 'ooooooooo'
      }
   }
}
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
   background: blue;
}
</style>
