<template>
  <div>
    <div id="head">
      <input>
      <button @click="fkk++">add</button>
      <button @click="fkk--">remove last</button>  
    </div>
    <div id="square" v-for="fk in fkk" @click="fkk++" :key="fk"></div>
  </div>
</template>

<script> 
  export default {
    name: 'InteractivePalette',
    data() { 
      return {
        fkk: 0
      }
    } 
  }
</script>

<style>
  #head {  
    text-align: left;
  }
  #square {  
    width: 140px;
    height: 70px;
    background: green;
    margin: 25px ;
    float: left;
  }
</style>

