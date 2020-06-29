<template>
  <div class="main">

    <h1><strong>#20 Comment me</strong></h1>
    <p>Using <code>curl</code> command line tool create command under this issue</p>
    <p><strong>Comments:</strong></p>

    <div class="comments-massive" v-for="item in massive" :key="item">
      <div class="comments-massive__body">
        <VueMarkdown> {{ item.body }} </VueMarkdown>
      </div>
      <div class="comments-massive__created">
        {{ item.created_at }}
      </div>  
    </div>

    <div class="comments-newMassive" v-for="(newItem, newIndex) in newMassive" :key="newItem">
      <div class="comments-newMassive__body">
        <VueMarkdown> {{ newItem.body }} </VueMarkdown>
      </div>
      <div class="comments-newMassive__created">
        {{ newItem.created_at }}
      </div>
      <button class="comments-newMassive__delete" @click='deleteComment(), deleteNewMassive(newIndex)'>Delete</button>
    </div>

    <input type="text" class="comments-newMassive__target" v-model='target.body' />
    <button v-if='target.body' @click='createComment(), createNewMassive()'>Add</button>
{{newMassive}} 
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
        target: {
          body:''
        },
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
        let { body } = this.target;
        let createNewMassiveBody = { body };
        this.newMassive.push(createNewMassiveBody);
      },
      deleteNewMassive(newIndex) {
        this.newMassive.splice(newIndex, 1);
      }
    }
  }
</script>

<style>

  .main {

  }

  .comments-massive {
  
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