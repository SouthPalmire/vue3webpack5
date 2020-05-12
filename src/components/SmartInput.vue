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
      },
//      deleteInstruction(index) {
//      }
    }
  }
</script>

<style>
</style>