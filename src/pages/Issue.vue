<template>
<div>
  <h1>#20 issue</h1>
  <div style="ttt" v-for="(item, index) in massive" :key="index">
    <VueMarkdown> {{ item.body }} </VueMarkdown> 
    {{ item.user.login }} 
    {{ item.created_at }}
    <button @click='deleteComment()'>-</button>
  </div>
  <input />
  <button @click='createComment()'>+</button>
</div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'
    export default {
    name: 'Issue',
    components: {
      VueMarkdown
    },
    data() {
      return {
        item: '',
        massive: []
      }
    },
    created() {
      fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments')
        .then(response => response.json())
        .then(data => (this.massive = data.map(({user, body, created_at}) => ({user, body, created_at}))));
    },
    methods: {
      createComment() {

      },
      deleteComment() {

      }
    }
  }
</script>

<style>

</style>