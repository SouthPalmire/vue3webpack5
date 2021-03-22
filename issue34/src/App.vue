<template>
   <div id="text">
      <input v-model="getText" type="text">
      <hr/>
      {{ getText }}
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