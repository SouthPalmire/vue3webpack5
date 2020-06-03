<template>
  <div>
    <button @click='getMassiveData()'>issues</button>
    <div class="list" v-for="item in massive" :key="item.index">
      <div class="number">
        {{ item.number }}
      </div>
      <div class="title">
        {{ item.title }}
      </div>
      <div class="icon">
        {{ item.state }}    
        <img class="icon-in" :src="`http://localhost:8080/svg/tick.svg`" />
      </div>
    </div>
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
          .then(data => (this.massive = data));
      },
    }  
  }    
</script>

<style>
  .list {
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
  .icon-in { 
    width: 10px;
    height: 10px;
  }
</style>
