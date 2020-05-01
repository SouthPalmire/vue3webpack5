<template>
  <section>
    <button type="button" @click="$emit('rowsM',1)">-</button>
    {{ rows }}
    <button type="button" @click="$emit('rowsP',1)">+</button>
    x
    <button type="button" @click="$emit('columnsM',1)">-</button>
    {{ columns }}
    <button type="button" @click="$emit('columnsP',1)">+</button>
  </section>
</template>

<script> 
  export default {  
   
    name: 'EditNumber',
    data() {
      
      return {      
      }
    } 
  }
</script>

<style>
</style>
