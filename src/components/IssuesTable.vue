<template>
  <div>  
    <div class="block__issue" v-for="item in massive" :key="item.index">  
      <div class="issue-number">
        {{ item.number }}
      </div>
      <div class="issue">
        <div class="issue-head">
          <div class="issue-head__title">
            {{ item.title }}
          </div>    
          <div class="issue-head__state">
            {{ item.state }}   
          </div>
          <div class="issue-head__created">
            {{ item.created_at }}
          </div>
          <button class="issue-head__button" @click="show = !show">
            <img class="issue-button__arrow" src="http://localhost:8080/svg/down-arrow.svg" />     
          </button>      
        </div>
        <div class="issue-body">
          <VueMarkdown class="issue-body__open" v-if="show">{{ item.body }}</VueMarkdown>
          <VueMarkdown class="issue-body__closed" v-else >{{ item.body }}</VueMarkdown>
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
        show: true,
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
  .issue-title::first-letter {
    text-transform: uppercase;
  }

  .block__issue {
    display: flex;
  }

  .issue-number {  
    flex: none;
    align-items: center;
    margin: 5px;
    font-size: 85px;  
    color: white;
    transition-duration: 0.5s;
    background-color: black;
    width: 100px;
    height: 100px;
    float: left;
  }

  .issue-number:hover {
    color:black;
    background-color:white;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    transition-property: background-color, color;
  }

  .issue {
    display: flex;
    flex-direction: column;
  }

  .issue-head {
    display: flex;
  }

  .issue-head__title { 
    margin: 1px;
    background-color: gray;
    text-align: left;
    flex-grow: 1;
    float: left;
  }

  .issue-head__state {    
    background-color: gray;
  }

  .issue-head__created {
    background-color: gray;
  }

  .issue-head__button {
    background-color: gray;
  }

  .issue-button__arrow {
    width: 15px;
    height: 15px;
  }

  .issue-body {  
   
  } 

  .issue-body__open {  
    background-image: linear-gradient(to bottom, grey, white);
  }

  .issue-body__closed {
    background-color: grey;
  } 

  .state-img {
    flex: none;
    margin: 5px;
    display: flex;
    align-items: center;
    float: left;
    background-color: grey;
    width: 100px;
    height: 100px;
  }

  .state-in, 
  .state-out {
    width: 80px;
    height: 80px;
  }
</style>
