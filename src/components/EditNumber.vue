<template>
  <span>
    <button type="button"  @click="$emit('input', --value )">-</button>
    {{ value }}
    <button type="button" @click="$emit('input', ++value )">+</button>
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

