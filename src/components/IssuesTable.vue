<template>
  <div>  
    <div class="issue" v-for="item in massive" :key="item.index">  
      <div class="number">
        {{ item.number }}
      </div>
      <form class="form">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="state">
          {{ item.state }}   
        </div>
        <div class="created">
          {{ item.created_at }}
        </div>
        <button class="button">
          <img class="arrow" src="http://localhost:8080/svg/down-arrow.svg" />     
        </button>
      </form> 
      <div class="state-img">
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
        .then(data => (this.massive = data.map(({title, state, number, body, created_at}) => ({title, state, number, body, created_at})))); 
    }
  }
</script>

<style>
  .input {
    width: 15px;
    height: 15px;
  }
  .arrow {
    width: 15px;
    height: 15px;
  }
  .form {
    background-color: green;
    width: 1000px;
    height: 25px;
    float: left;
  }
  .button {
    border-radius: 10px;
    display: flex;
    align-items:center;
    float: left;
  }
  .created {
    float: left;
  }
  .body {
    width: 1200px;
    height: 300px;
    background-color: yellow;
  }
  .issue { 
  }
  .title {
    float: left;
  }
  .title::first-letter {
    text-transform: uppercase;
  }
  .number {
    background-color: grey;
    width: 100px;
    height: 100px;
    float: left;
  }
  .state {
    float: left;
  }
  .state-img {
    float: left;
    background-color: grey;
    width: 100px;
    height: 100px;
  }
  .state-in, .state-out {
    width: 100px;
    height: 100px;
  }
</style>
