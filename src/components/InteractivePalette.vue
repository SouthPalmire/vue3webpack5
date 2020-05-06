<template>
  <div>
    <div id="head">
      <input type="text"  v-model="txt" >
      <button type="button" @click="masive.push(txt)">add</button>
      <button type="button" @click="masive.pop()">remove last</button>  
      {{ masive }}
    </div>
    <div id="square" type="button"
      @click="0"
      v-for="item in masive" :key="item"
      :style="{background: masive}"
    ></div>
  </div>
</template>

<script> 
  export default {
    name: 'InteractivePalette',
    data() {   
      return {  
        masive: []
      }
    } 
  }
</script>

<style>
  button {
    margin-left: 5px;
    border-radius: 5px;
  }
  #head {  
    text-align: left;
  }
  #square {  
    width: 140px;
    height: 70px;  
    margin: 25px ;
    float: left;
  }
</style>

