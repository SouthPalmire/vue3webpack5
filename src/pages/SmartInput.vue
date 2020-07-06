<template>
  <div style="text-align: center">
    <form class="form">
      <input type="text" v-model="newInstruction.min" size="12" placeholder="min threshold" />
      <input type="text" v-model="newInstruction.max" size="12" placeholder="max threshold" />
      <input type="text" v-model="newInstruction.color" placeholder="color" />
      <input type="text" v-model="newInstruction.text" placeholder="text" />
      <button type="button" @click="createInstruction()">create</button>
    </form>

    <table class="table">
      <tr v-for="( instruction, index ) in instructions" :key="index">
        <td>{{ instruction.min }}</td>
        <td>{{ instruction.max }}</td>
        <td class="td" :style="{ backgroundColor: instruction.color }"></td>
        <td :style="{ color: instruction.color }"> {{ instruction.text }} </td>
        <td><button @click="deleteInstruction(index)">delete</button></td>
      </tr>  
    </table>

    <div>
      <input class="showcase" v-model="target" :style="{ backgroundColor: targetInstruction.color }" /> 
    </div>

    <div class="bottom" :style="{ color: targetInstruction.color }">
      {{ targetInstruction.text }}
    </div>

  </div>
</template>

<script>
  export default {
    name: 'SmartInput',
    data() {
      return {  
        instructions: [],
        newInstruction: {
          min: '',
          max: '',
          color: '',
          text: '',
        },
        target: '',
      }
    },
    computed: {
      targetInstruction() { 
        const { target, instructions } = this; 
        function targetFunction({min, max}) {
          return (+target >= min) && (+target <= max)
        }
        return instructions.find(targetFunction) || { color: 'initial', text: '' }  
      }
    },
    methods: {
      createInstruction() {
        let {min, max, color, text} = this.newInstruction;
        let getInstruction = {min, max, color, text};
        this.instructions.push(getInstruction);
      },
      deleteInstruction(index) {
        this.instructions.splice(index, 1);
      }
    }
  }  
</script>

<style>
  input {
    margin: 3px;
  }
  td {
    border: 1px solid black;
    padding: 5px;
  }
  button { 
    margin: 5px;
    border-radius: 5px;
  }
  .showcase {
    text-align: center;
    font-size: 90px;
    width: 250px;
    height: 100px;
  }
  .table {  
    font-size: 1.3em;
    font-weight: 500;
    font-family: 'Times New Roman';
    border: 2px solid black;
    border-collapse: collapse;
    margin: auto;
  } 
  .td {
    height: 35px;
    width: 100px;
  }
  .bottom {
    font-family: 'Times New Roman';
    font-weight: 500;
    font-size: 1.3em;
  }
</style>