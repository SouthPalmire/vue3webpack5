<template class="template">
  <div>  
    <div class="issue" v-for="item in massive" :key="item.index">  
      <div class="number">
        {{ item.number }}
      </div>
      <div class="form">
        <div class="form-1">
          <div class="title">
            {{ item.title }}
          </div>    
          <div class="state">
            {{ item.state }}   
          </div>
          <div class="created">
            {{ item.created_at }}
          </div>
            <div class="button">
            <img class="arrow" src="http://localhost:8080/svg/down-arrow.svg" />     
          </div>      
        </div>
        <div class="form-2">
          <VueMarkdown class="body">
            {{ item.body }}
          </VueMarkdown>
        </div>  
      </div> 
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
  .title::first-letter {
    text-transform: uppercase;
  }
  .template { 
  }
  .issue {
    display: flex;
  }
  .form {
    flex-direction: column;
    display: flex;
    flex-grow: 1;
    height: 90px;
    float: left;
  }
  .form-1 {
    display: flex;
    justify-content: flex-end;
    margin: 5px;
    width: auto;
    height: 20px;
    background-color: blue;
  }
  .title { 
    margin: 1px;
    background-color: gray;
    text-align: left;
    width: auto;
    flex-grow: 1;
    float: left;
  }
  .state {    
    margin: 1px;
    background-color: gray;
    float: right;
  }
  .created {
    margin: 1px;
    background-color: gray;
    float: right;
  }
  .button {
    margin: 1px;
    background-color: gray;
    display: flex;
    align-items: center;
    float: right;
  }
  .arrow {
    width: 15px;
    height: 15px;
  }
  .form-2 {
    margin: 5px;
    width: auto;
    height: 50px;
    
  } 
  .body {
    background-image: linear-gradient(to bottom, grey, white);
  } 
  .number {  
    font-size: 40px;  
    color: white;
    transition-duration: 1s;
    background-color: gray;
    width: 100px;
    height: 100px;
    float: left;
  } 
  .number:hover {
    color:black;
    background-color:white;
    transition-timing-function: ease-out;
    transition-duration: 1s;
    transition-property: background-color, color;
  }
  .state-img {
    margin: 5px;
    display: flex;
    align-items: center;
    float: left;
    background-color: grey;
    width: 100px;
    height: 100px;
  }
  .state-in, .state-out {
    width: 80px;
    height: 80px;
  }
</style>
