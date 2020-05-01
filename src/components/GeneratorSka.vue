<template>
<div>
  <EditNumber 
  v-on:rowsM='rows -= $event'
  v-on:rowsP='rows += $event'
  v-on:columnsM='columns -= $event'
  v-on:columnsP='columns += $event'
  ></EditNumber>
  <table class="it">
    <tr v-for="row in rows" :key="row">
      <td v-for="column in columns+1" :key="column"></td>
    </tr>
    <tr>
      <td v-for="column in columns" :key="column"></td>
      <td>
        <button type="button" @click="columns++;rows++">&#8600;</button>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
  import EditNumber from './EditNumber.vue'
  export default {
    name: 'GeneratorSka',
    data() {
      return { 
        rows: 2,
        columns: 2
      }
    },
    components: {
      EditNumber
    }  
  }
</script>

<style>
  button {   
    border-radius: 5px;
  }
  .it tr:nth-child(odd) td:nth-child(even) {
	background: black;
  }
  .it tr:nth-child(even) td:nth-child(odd) {
  background: black;
  }
  div {  
    text-align: left;
    background-color: white;
    height: 453px;
    width: 453px;
  }
  body { 
    position: absolute;
    left: 33%;
    margin-top: 60px;
    background-color: blue;
  }
  table {  
    border-collapse: collapse;
  }
  th, td {
    width: 25px;
    height: 25px;
  }
</style>