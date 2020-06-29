<template>
  <div class="main">

    <h1><strong>#20 Comment me</strong></h1>
    <p>Using <code><strong>curl</strong></code> command line tool create command under this issue</p>
    <p><strong>Comments:</strong></p>

    <div class="comments-massive" v-for="(item, index) in massive" :key="index">
      <div class="comments-massive__body">
        <VueMarkdown> {{ item.body }} </VueMarkdown>
      </div>
      <div class="comments-massive__created">
        {{ item.created_at }}
      </div>  
    </div>

    <div class="comments-newMassive" v-for="(item, index) in newMassive" :key="index">
      <div class="comments-newMassive__body">
        <VueMarkdown> {{ item.body }} </VueMarkdown>
      </div>
      <div class="comments-newMassive__created">
        {{ item.created_at }}
      </div>
      <button class="comments-newMassive__delete" @click='deleteComment(), deleteNewMassive()'>Delete</button>
    </div>

    <input class="comments-newMassive__target" v-model='target'/>
    <button v-if='target' @click='createComment(), createNewMassive()'>Add</button>

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
        massive: [],
        newMassive: [],
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

      },
      createNewMassive() {

      },
      deleteNewMassive() {

      }
    }
  }
</script>

<style>

  .main {

  }

  .comments {
  
  }

  .comments-massive__body {
  
  }

  .comments-massive__created {
  
  }

  .comments-newMassive {

  }

  .comments-newMassive__body {

  }

  .comments-newMassive__created {

  }

  .comments-newMassive__delete {
  
  }

  .comments-newMassive__target {
  
  }

</style>