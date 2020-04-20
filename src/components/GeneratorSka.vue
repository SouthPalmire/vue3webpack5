<template>
<div>
  <button type="button" @click="rows--">-</button>
  {{ rows }}
  <button type="button" @click="rows++">+</button>
  x
  <button type="button" @click="columns--">-</button>
  {{ columns }}
  <button type="button" @click="columns++">+</button>)
  
  <table class="it">
    <tr v-for="row in rows" :key="row">
      <td v-for="column in columns" :key="column">
        <button  type="button" @click="columns++;rows++">&#8600;</button>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
  export default {
    name: 'GeneratorSka',
    data() {
      return {
        rows: 2,
        columns: 2,
      };
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
    background-color: white;
    height: 500px;
    width: 500px;
  }
  body {
    position: absolute;
    left: 33%;
    margin-top: 60px;
    background-color: black;
    }
  table {  
    border-collapse: collapse;
  }
  th, td {
    width: 30px;
    height: 30px;
  }
</style>