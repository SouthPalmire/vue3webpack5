<template>
  <div class="main">

    <div>
     # {{ issue.number }} {{ issue.title }}
    </div>
    <div>
      <VueMarkdown> {{ issue.body }} </VueMarkdown>
      <p><strong>Comments:</strong></p>
    </div>

    <div>

{{ comments }}
    </div>
    

    

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
        issue: '',
        comments: []
      }
    },
    created() {
      fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20')
        .then(response => response.json())
        .then(data => this.issue = data);
      fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments')
        .then(response => response.json())
        .then(data => this.comments = data)
    }
  }
</script>

<style>

  
</style>