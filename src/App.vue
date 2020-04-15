<template>
  <div id="app">
      <GeneratorSka/>
  </div>
</template>

<script>
import GeneratorSka from './components/GeneratorSka.vue'

export default {
  name: 'App',
  components: {
    GeneratorSka
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
