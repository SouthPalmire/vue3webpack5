<template>
  <div style="text-align: center">
    <form>
      <input type="text" v-model="newInstruction.min" size="12" placeholder="min threshold" />
      <input type="text" v-model="newInstruction.max" size="12" placeholder="max threshold" />
      <input type="text" v-model="newInstruction.color" placeholder="color" />
      <input type="text" v-model="newInstruction.text" placeholder="text" />
      <button type="button" @click="createInstruction()">create</button>
    </form>

    <table>
      <tr class="tr" v-for="( instruction, index ) in instructions" :key="index">
        <td>{{ instruction.min }}</td>
        <td>{{ instruction.max }}</td>
        <td :style="{ backgroundColor: instruction.color }"></td>
        <td :style="{ color: instruction.color }">{{ instruction.text }}</td>
        <td><button @click="deleteInstruction(index)">delete</button></td>
      </tr>  
    </table>

    <div class="showcase">
      <input class="showcase__target" v-model="target" @input="logConsole()" 
        :style="{ backgroundColor: targetInstruction.color }"
      /> 
    </div>

    <div :style="{ color: targetInstruction.color }">
      {{ targetInstruction.text }}
    </div>

  </div>
</template>

<script>
  export default {
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
          return (target >= min) && (target*1 <= max)
        }
        return instructions.find(targetFunction) || { color: 'initial', text: '' }  
      } 
    },
    methods: {
      logConsole() {
        return console.log(this)
      },
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
  table {  
    border-collapse: collapse;
    margin: auto;
  } 
  td {
    font-weight: bold;
    border: 1px solid black;
    height: 35px;
    width: 75px;
  }
  button { 
    border-radius: 5px;
  }
</style>