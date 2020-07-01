<template>  
    <h1><strong>#20 Comment me</strong></h1>
    <p>Using <code>curl</code> command line tool create command under this issue</p>
    <p><strong>Comments:</strong></p>

    

    <div class="comments-newMassive" v-for="(newItem, newIndex) in newMassive" :key="newItem">
      <div class="comments-newMassive__body">
        <VueMarkdown> {{ newItem.body }} </VueMarkdown>
      </div>
      <div class="comments-newMassive__created">
        {{ newItem.created_at }}
      </div>
      <button class="comments-newMassive__delete" @click='deleteComment(), deleteNewMassive(newIndex)'>Delete</button>
    </div>

    <input type="text" class="comments-newMassive__target" v-model='target' />
    <button v-if='target' @click='createComment(), createNewMassive()'>Add</button>
</template>  



<script>
created() {
      fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments')
        .then(response => response.json())
        .then(data => (this.massive = data.map(({body, created_at}) => ({body, created_at}))))
    },
    createComment() {
        let { target } = this;
        const requestOptionsPush = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 98b07fbf2d8370b3633dfa4678ee423669217382'
          },
          body: JSON.stringify({ body: target }),
        };
        fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments', requestOptionsPush)
        ;
      },

      deleteComment() {
        const requestOptionsDelete = {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 98b07fbf2d8370b3633dfa4678ee423669217382'
          },
          
        };
        fetch('https://api.github.com/repos/SouthPalmire/sandbox/issues/20/comments', requestOptionsDelete);
      },

      createNewMassive() {
        let { target: body } = this;
        let created_at = new Date();
        let massiveCreate = { body, created_at };
        this.newMassive.push(massiveCreate);
      },
      
      deleteNewMassive(newIndex) {
        this.newMassive.splice(newIndex, 1);
      }
</script>

<style>

</style>