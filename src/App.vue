<template>
  <div id="app">
      <InteractivePalette>
      </InteractivePalette>
  </div>
</template>

<script>
import InteractivePalette from './components/InteractivePalette.vue'
//import GeneratorSka from './components/GeneratorSka.vue'

export default {
  name: 'App',
  components: {
//    GeneratorSka,
    InteractivePalette
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
}
</style>
