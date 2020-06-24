<template>
  <div>
    <div class="block__issue" v-for="(item, index) in massive" :key="index">
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
          <div class="issue-head__collapse-button" @click="$set(item, 'selected', !item.selected)">
            <img class="issue-head__collapse-button__transition" :class="{collapseButtonTransition: item.selected}" src="http://localhost:8080/svg/down-arrow.svg" />
          </div>
        </div>
        <div class="issue-Body" :class="{'Body__Close': !item.selected}" >
          <div :class="{'issue-Body__Close': !item.selected}">
          </div>
          <div class="issue-Body__Open">
            <VueMarkdown> {{ item.body }} </VueMarkdown>
          </div>
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
        selected: '',
        index: '',
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

  code {
    font-weight: bold;
  }

  .issue-head__title::first-letter {
    text-transform: uppercase;
  }

  .block__issue {
    display: flex;
    overflow: auto;
    text-align: center;
  }

  .issue-number {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    font-size: 50px;
    color: black;
    transition-duration: 0.5s;
    background-color: white;
    width: 100px;
    height: 100px;
  }

  .block__issue:hover .issue-number {
    font-size: 70px;
    color: white;
    background-color: black;
    transition-duration: 0.5s;
    transition-property: background-color, color;
  }

  .issue {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .issue-head {
    display: flex;
  }

  .issue-head__title {
    font-weight: bold;
    padding: 5px;
    color: black;
    margin: 2px;
    background-color: gray;
    text-align: left;
    flex-grow: 1;
  }

  .issue-head__state {
    padding: 5px;
    color: black;
    margin: 2px;
    background-color: gray;
  }

  .issue-head__created {
    padding: 5px;
    color: black;
    margin: 2px;
    background-color: gray;
  }

  .issue-head__collapse-button {
    padding: 5px;
    margin: 2px;
    background-color: gray;
  }

  .collapseButtonTransition {
    transform: rotate(180deg);
  }

  .issue-head__collapse-button__transition {
    transition: transform 0.5s;
    width: 15px;
    height: 15px;
  }

  .Body__Close {
    height: 71px;
  }

  .issue-Body {
    position: relative;
    overflow: hidden;
  }

  .issue-Body__Close { 
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px; 
    height: 71px;
    background: linear-gradient(to bottom, transparent, white);
  }

  .issue-Body__Open {
    min-height: 67px;
    margin: 2px;
    padding-left: 5px;
    text-align: left;
    color: black;
    background-color: grey;
    overflow: hidden;
  }

  .state-img {
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
  }

  .state-in,
  .state-out {
    width: 60px;
    height: 60px;
  }
</style>