<template>

  <div class="container" style="max-width: 720px">
    
    <!-- Error Section -->
    <div v-show="errors.size" class="alert alert-danger mt-5" role="alert"
    @click="resetErrors" 
    >
      <p class="mb-0" v-for="error in errors" :key="error">{{ error }}</p>
    </div> 

    <!-- Edit Section -->
    <h2 class="text-center mt-3">Edit Task</h2>
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task.text"
        class="w-100 form-control"/>
      <button class="btn btn-primary rounded-2 ms-2"
        @click="editTask" 
        style="width: 100px">
        Edit
      </button>
      <button class="btn btn-danger rounded-2 ms-2" 
        @click="cancelEdit"
        style="width: 100px">
        Cancel
      </button>
    </div>

  </div>

</template>

<script>
import { getTodos, postTodos, putTodos, deleteTodos } from '../services.js'

export default {
    props: ['task', 'errors'],

    methods: {
        async editTask() {
            try {
                await putTodos(this.task, this.task.id);
                this.$emit('cancel');
            }
            catch(e) {
                this.errors.add(e.message);
            }
        },
        
        cancelEdit() {
            this.$emit('cancel');
        },
        
        resetErrors() {
          console.log("errors");
          this.errors.clear();
        },
    },
}
</script>

<style>

</style>