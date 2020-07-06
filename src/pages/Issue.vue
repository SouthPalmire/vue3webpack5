<template>
  <div>
    
    <div v-if="issueHead | comments == ''">
      <p><code>Loading issue...</code></p>
      <p><code>Loading comments...</code></p>
    </div>

    <div v-else>
      <h1>
        <strong>#{{ issueHead.number }} {{ issueHead.title }}</strong>
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
          {{ comment.created_at | moment("from", "now") }}
        </div>
        <button v-if="(comment.user.login == 'SouthPalmire') && (comment.id != undefined)" @click="deleteCommentMirror(index), deleteComment(comment)">Delete</button>
      </div>

      <textarea class="comments-target" v-model='target'></textarea><p/>
      <button v-if='target' @click="createCommentMirror(), createComment()">Add</button>
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
        target: '',
        issueHead: '',
        comments: []
      }
    },
    created() {
      this.loadingPage()
    },
    methods: {
      loadingPage() {
        fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20')
          .then(response => response.json())
          .then(data => this.issueHead = data);
        fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments')
          .then(response => response.json())
          .then(data => this.comments = data)
      },
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
      createCommentMirror() {
        const { target: body } = this;
        const created_at = new Date();
        const user = { login: 'SouthPalmire' }
        const massiveCreate = { body, created_at, user };
        this.comments.push(massiveCreate);
      },
      deleteCommentMirror(index) {
        this.comments.splice(index, 1);
      }
    }
  }
</script>

<style>

  .comments {
    display: flex;
    overflow: auto;
    flex-grow: 5;
    align-items: center;
    text-align: left;
  }

  .comments-body {
    margin-left: 30px;
    flex-grow: 1;
  }

  .comments-created {
    margin-right: 10px;
    flex-grow: 1; 
    text-align: right;
  }

  .comments-target {
    width: 700px;
    height: 80px;
  }

</style>