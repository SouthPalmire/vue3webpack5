<template>
  <section>
    <button type="button" @click="rows--">-</button>
    {{ rows }}
    <button type="button" @click="rows++">+</button>
    x
    <button type="button" @click="columns--">-</button>
    {{ columns }}
    <button type="button" @click="columns++">+</button>
  </section>
</template>

<script> 
  export default {
    name: 'EditNumber',
    data() {
      return {rows: 2,
        columns: 2}
      } 
    }
</script>

<style>

</style>
