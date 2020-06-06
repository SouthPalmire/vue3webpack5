<template class="template">
  <div>  
    <div class="issue" v-for="item in massive" :key="item.index">  
      <div class="number">
        {{ item.number }}
      </div>
      <form class="form">
        <div class="div-1">
          <span class="title">
            {{ item.title }}
          </span>
          <span class="state">
            {{ item.state }}   
          </span>
          <span class="created">
            {{ item.created_at }}
          </span>
          <span class="button">
            <img class="arrow" src="http://localhost:8080/svg/down-arrow.svg" />     
          </span>
        </div>
        <div class="div-2">
          <VueMarkdown class="body">
            {{ item.body }}
          </VueMarkdown>
        </div>  
      </form> 
      <div class="state-img">
        <img class="state-out" v-if="item.state == 'closed'" src="http://localhost:8080/svg/tick.svg" />
        <img class="state-in" v-else src="http://localhost:8080/svg/dev.svg" />  
      </div>
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
  .div-1 {
    width: 600px;
    height: 30px;
    background-color: blue;
    -webkit-order: 1;
    order: 1;
  }
  .div-2 {
    width: 600px;
    height: 50px;
    background-color: blue;
    -webkit-order: 2;
    order: 2;
  }
  .template {
  }
  .input {
    width: 15px;
    height: 15px;
  }
  .arrow {
    width: 15px;
    height: 15px;
  }
  .form {
    flex-wrap: wrap;
    display: flex;
    background-color: green;
    width: 1100px;
    height: 90px;
    float: left;
  }
  .button {
    background-color: gray;
    display: flex;
    align-items: center;
    float: left;
  }
  .created {
    float: left;
  }
  .body {
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
    background-color: gray;
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
