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
    <tr>
      <td>
        <button type="button" @click=""></button>
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

</style>