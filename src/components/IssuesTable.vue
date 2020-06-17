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
            <img class="issue-head__collapse-button__transition" v-bind:class="{collapseButtonTransition: item.selected}" src="http://localhost:8080/svg/down-arrow.svg" />
          </div>
        </div>
        <div class="issue-body">
          <VueMarkdown class='issue-Body__Open' v-if='item.selected' >{{ item.body }}</VueMarkdown>
          <VueMarkdown class='issue-Body__Close' v-else>{{ item.body }}</VueMarkdown>
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
  .issue-head__title::first-letter {
    text-transform: uppercase;
  }

  .block__issue {
    overflow: 100%;
    text-align: center;
    display: flex;
  }

  .issue-number {
    flex: none;
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
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    transition-property: background-color, color;
  }

  .issue {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  .issue-head {
    display: flex;
  }

  .issue-head__title {
    padding: 5px;
    color: black;
    font-weight: bold;
    margin: 2px;
    background-color: gray;
    text-align: left;
    flex-grow: 1;
    float: left;
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

  .issue-body {
    background: linear-gradient(to bottom, grey, white);
    margin: 2px;
  }

  .issue-Body__Open {
    padding-left: 5px;
    text-align: left;
    overflow: hidden;
    max-width: 1123px;
    color: black;
    background-color: grey;
  }

  .issue-Body__Close {
    padding-left: 5px;
    text-align: left;
    max-width: 1123px;
    overflow: hidden;
    height: 68px;
    background: linear-gradient(to bottom, black, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .state-img {
    margin: 2px;
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
  }

  .state-in,
  .state-out {
    width: 60px;
    height: 60px;
    padding-left: 15px;
  }
</style>