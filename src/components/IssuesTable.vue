<template>
  <div>  
    <div class="list" v-for="item in massive" :key="item.index">
      
      <div class="number">
        {{ item.number }}
      </div>
      <div class="title">
        {{ item.title }}
      </div>
      <div class="state">
        {{ item.state }}
        <img class="state-out" v-if="item.state == 'closed'" src="http://localhost:8080/svg/tick.svg" />
        <img class="state-in" v-else src="http://localhost:8080/svg/dev.svg" />  
      </div>
      <VueMarkdown class="body">
        {{ item.body }}
      </VueMarkdown>  
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'IssuesTable',
    components: {
      VueMarkdown 
    },
    data() {
      return {
        massive: []
      }
    },
    created() {
      fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues?state=all')
        .then(response => response.json())  
        .then(data => (this.massive = data.map(({title, state, number, body}) => ({title, state, number, body})))); 
    }
  }
</script>

<style>
  .body {
    text-align: left;
  }
  .list { 
  }
  .title {
    margin-left: 10px;
    float: left;
  }
  .title::first-letter {
  text-transform: uppercase;
  }
  .number {
    width: 20px;
    float: left;
  }
  .state {
    text-align: right;
  }
  .state-in, .state-out {
    width: 15px;
    height: 15px;
  }
</style>
