<template>
<div id="app" style="text-align: center;">
    <form>
      <input type="text" v-model="newInstruction.min" size="12" placeholder="min threshold" />
      <input type="text" v-model="newInstruction.max" size="12" placeholder="max threshold" />
      <input type="text" v-model="newInstruction.color" placeholder="color" />
      <input type="text" v-model="newInstruction.text" placeholder="text" />
      <button type="button" @click="createInstruction()">
        create
      </button> 
    </form>
<table v-for="(index, instruction) in instructions" :key="instruction">
    <tr>
      <td>{{index.min}}</td>
      <td>{{index.max}}</td>
      <td :style="{ backgroundColor: index.color }"></td>
      <td :style="{ color: index.color }">{{index.text}}</td>
      <td><button @click="instructions.pop()">delete</button></td>{{index}} {{instruction}}
    </tr>
</table>
    <div class="showcase">
      <input class="showcase__target" v-model="target" />
    </div>

{{newInstruction}} {{instructions}} {{target}}

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
//    computed: {
//      targetInstruction() {
//        const { target, instructions } = this
//        return instructions.find() || { color: 'initial', text: '' }
//      }
//    },
    methods: {
      createInstruction() {
        this.instructions.push(this.newInstruction)
      },
//      deleteInstruction(index) {
//      }
    }
  }
</script>

<style>
  td {
    height: 25px;
    width: 60px;
  }
</style>