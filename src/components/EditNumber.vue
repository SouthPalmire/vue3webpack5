<template>
  <section>
    <button type="button" @click="rows--">-</button>
    {{ rows }}
    <button type="button" @click="rows++">+</button>
    x
    <button type="button" @click="columns--">-</button>
    {{ columns }}
    <button type="button" @click="columns++" :columns='value'>+</button>
  </section>
</template>

<script> 
  export default {  
    name: 'EditNumber',
    data() {
      return {
        props: ['value'],
      }
    } 
  }
</script>

<style>
</style>
