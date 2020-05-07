<template>
  <div>
    <div id="head">
      <input type="text" v-model="txt">
      <button type="button" @click="massive.push(txt)">add</button>
      <button type="button" @click="massive.pop()">remove last</button>
    </div>
    <div id="square" type="button"
      :style="{background: massive}"
      @click="massive.push(item)"
      v-for="(item, mass) in massive" :key="mass"
    ></div>
  </div>
</template>

<script> 
  export default {
    name: 'InteractivePalette',
    data() {   
      return {
        mass: '',
        txt: '', 
        massive: []
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

