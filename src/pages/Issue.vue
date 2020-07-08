<template>
  <div>
    
    <div v-if="comments == ''">
      <p><code>Loading comments...</code></p>
    </div>

    <div v-if="issue == ''">
      <p><code>Loading issue...</code></p>
    </div>

    <div v-else>
      <h1>
        <strong>#{{ issue.number }} {{ issue.title }}</strong>
      </h1>
      <div>
        <VueMarkdown class="comments-body"> {{ issue.body }} </VueMarkdown>
        <p><strong>Comments:</strong></p>
      </div>

      <div class="comments" v-for="(comment, index) in comments" :key="index">
        <div class="comments-body">
          <VueMarkdown> {{ comment.body }} </VueMarkdown>
        </div>
        <div class="comments-created">
          {{ comment.created_at | moment("from", "now") }}
        </div>
        <button v-if="comment.user.login == 'SouthPalmire'" @click="deleteComment(comment, index)">Delete</button>
      </div>

      <textarea class="comments-target" v-model='target'></textarea><p/>
      <button v-if='target' @click="createComment()">Add</button>
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
        routeID: this.$route.params.id,
        target: '',
        issue: '',
        comments: []
      }
    },
    created() {
      this.loadingPage()
    },
    methods: {
      loadingPage() {
        fetch(('https://api.github.com/repos/SouthPalmire/sandbox/issues/')+(this.routeID))
          .then(response => response.json())
          .then(data => this.issue = data)
        fetch(('https://api.github.com/repos/SouthPalmire/sandbox/issues/')+(this.routeID)+('/comments'))
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
        fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments', requestOptionsPush)
        .then(response => response.json())
        .then(data => this.comments.push(data))
      },
      deleteComment(comment, index) {
        const { id } = comment;
        const requestOptionsDelete = {
          method: 'DELETE',
          headers: { 
            'Authorization': 'Bearer '
          },
        };
        fetch(('https://api.github.com/repos/SouthPalmire/sandbox/issues/comments/')+(id), requestOptionsDelete);
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
    overflow: auto;
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