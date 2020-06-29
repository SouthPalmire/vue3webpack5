<template>
  <div class="main">

    <h1><strong>#20 Comment me</strong></h1>
    <p>Using <strong>curl</strong> command line tool create command under this issue</p>
    <p><strong>Comments:</strong></p>

    <div class="comments" v-for="(item, index) in massive" :key="index">
      <div class="comments-body">
        <VueMarkdown> {{ item.body }} </VueMarkdown>
      </div>
      <div class="comments-created">
        {{ item.created_at }}
      </div>
      <button class="comments-delete" @click='deleteComment()'>Delete</button>
    </div>

    <input class="comments-target" v-model='target'/>
    <button v-if='target' @click='createComment()'>Add</button>

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
        target: '',
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

  .main {

  }

  .comments {
  
  }

  .comments-body {
  
  }

  .comments-created {
  
  }

  .comments-delete {
  
  }

  .comments-target {
  
  }

</style>