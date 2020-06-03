<template>
  <div>    
    {{ getMassiveData() }}
    <div class="list" v-for="item in massive" :key="item.index">
      <div class="number">
        {{ item.number }}
      </div>
      <div class="title">
        {{ item.title }}
      </div>
      <div class="icon">
        {{ item.state }}
        <img class="icon-out" v-if="item.state == 'closed' " :src="`http://localhost:8080/svg/tick.svg`" />
        <img class="icon-in" v-else :src="`http://localhost:8080/svg/dev.svg`" />  
      </div>
    </div>{{ massive }}
  </div>
</template>

<script>
  export default {
    name: 'IssuesTable',
    data() {
      return {
        massive: [],
      }
    },
    methods: {
      getMassiveData() {
        fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues?state=all')
          .then(response => response.json())  
          .then(data => (this.massive = data.map(({title, state, number}) => ({title, state, number}))));    
      },
    }
  }
</script>

<style>
  .button {
    border-radius: 10px;
  }
  .list {
    font-family: 'Courier New';
    font-weight: 600;
  }
  .title {
    margin-left: 10px;
    float: left;
  }
  .number {
    width: 20px;
    float: left;
  }
  .icon {
    text-align: right;
  }
  .icon-in, .icon-out {
    width: 15px;
    height: 15px;
  }
</style>
