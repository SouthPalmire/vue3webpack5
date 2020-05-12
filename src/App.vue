<template>
  <div id="app">
    <SmartInput>
    </SmartInput>
  </div>
</template>

<script>
//import test13 from './components/test13.vue'
import SmartInput from './components/SmartInput.vue'
//import InteractivePalette from './components/InteractivePalette.vue'
//import GeneratorSka from './components/GeneratorSka.vue'

export default {
  name: 'App',
  components: {
//    test13,
    SmartInput,
//    GeneratorSka,
//    InteractivePalette,
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
