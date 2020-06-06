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
      <VueMarkdown class="body">
        {{ item.body }}
      </VueMarkdown> 
      <div>
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
  .input {
    width: 15px;
    height: 15px;
  }
  .arrow {
    width: 15px;
    height: 15px;
  }
  .form {
    float: left;
  }
  .button {
    float: left;
  }
  .created {
    float: left;
  }
  .body {
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
    float: left;
  }
  .state {
    float: left;
  }
  .state-in, .state-out {
    width: 15px;
    height: 15px;
  }
</style>
