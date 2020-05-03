<template>
  <span>
    <button type="button"  @click="$emit('input', value-1 )">-</button>
    {{ value }}
    <button type="button" @click="$emit('input', value+1 )">+</button>
  </span>
</template>

<script> 
  export default {
    props: ['value'],
    name: 'EditNumber',
    data() { 
      return {
      }
    } 
  }
</script>

<style>

</style>

