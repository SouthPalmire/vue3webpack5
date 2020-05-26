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
      <input style="text-align: center" class="showcase__target" v-model="target" :style="{ backgroundColor: targetInstruction.color }"/> 
    </div>

    <div :style="{ color: targetInstruction.color }">
      {{ targetInstruction.text }}
    </div>

{{ newInstruction }} {{ instructions }} {{ target }}

  </div>
</template>

<script>
  export default {
    data() {
      return{  
        instructions: [],
        newInstruction: {
          min: '',
          max: '',
          color: '',
          text: ''
        },
        target: '',
      }
    },
    computed: {
      targetInstruction() { 
        return {
//        const { target, instructions } = this
//        return instructions.find() || { color: 'initial', text: '' }
        }
      }
    },
    methods: {
      createInstruction() {
        let {min, max, color, text} = this.newInstruction;
        let getInstruction = {min, max, color, text};
        this.instructions.push(getInstruction)
      },
//      deleteInstruction(index) {
//      }
    }
  }
</script>

<style>
  table {  
    border-collapse: collapse;
    margin: auto;
  } 
  td {
    border: 1px solid black;
    height: 25px;
    width: 60px;
  }
</style>