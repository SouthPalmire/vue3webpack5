<template>
  <div class="main">

    <h1>
      <strong> # {{ issueHead.number }} {{ issueHead.title }}</strong>
    </h1>
    <div>
      <VueMarkdown> {{ issueHead.body }} </VueMarkdown>
      <p><strong>Comments:</strong></p>
    </div>

    <div class="comments" v-for="(comment, index) in comments" :key="index">
      <div class="comments-body">
        <VueMarkdown> {{ comment.body }} </VueMarkdown>
      </div>
      <div class="comments-created">
        {{ comment.created_at }}
      </div>
      <button class="comments-delete" v-if="comment.user.login == 'SouthPalmire'" @click='deleteComment(comment)'>Delete</button>
    </div>

    <input type="text" class="comments-target" v-model='target' />
    <button class="comments-add" v-if='target' @click='createComment()'>Add</button>

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
        issueHead: '',
        comments: []
      }
    },
    created() {
      fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20')
        .then(response => response.json())
        .then(data => this.issueHead = data);
      fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments')
        .then(response => response.json())
        .then(data => this.comments = data)
    },
    methods: {
      createComment() {
        const { target } = this;
        const requestOptionsPush = {
          method: 'POST',
          headers: { 
            'Authorization': 'Bearer '
          },
          body: JSON.stringify({ body: target }),
        };
        fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments', requestOptionsPush);
      },
      deleteComment(comment) {
        const { id } = comment;
        const requestOptionsDelete = {
          method: 'DELETE',
          headers: { 
            'Authorization': 'Bearer '
          },
        };
        fetch(('https://api.github.com/repos/SouthPalmire/sandbox/issues/comments/')+(id), requestOptionsDelete);
      }, 
    }
  }
</script>

<style>

</style>