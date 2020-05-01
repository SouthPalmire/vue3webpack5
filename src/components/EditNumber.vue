<template>
  <section>
    <button type="button" @click="$emit('rowsM')">-</button>
    {{ rows }}
    <button type="button" @click="$emit('rowsP')">+</button>
    x
    <button type="button" @click="$emit('columnsM')">-</button>
    {{ columns }}
    <button type="button" @click="$emit('columnsP')">+</button>
  </section>
</template>

<script> 
  export default {  
    name: 'EditNumber',
    data() {
      return {
        rows: 2,
        columns: 2,
      }
    } 
  }
</script>

<style>
</style>
