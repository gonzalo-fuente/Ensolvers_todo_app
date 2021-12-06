<template>

  <div class="container" style="max-width: 720px">
    
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

  props: ['task'],

  methods: {
    async editTask() {
      try {
        await putTodos(this.task, this.task.id);
        this.$emit('cancel');
      }
      catch(e) {
        this.$store.commit('addError', e.message);
      }
    },
      
    cancelEdit() {
      this.$emit('cancel');
    },
  },
  
}

</script>

<style>

</style>