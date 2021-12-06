<template>

  <div class="container" style="max-width: 720px">

    <!-- Input Section -->
    <h2 class="text-center mt-3">Create Task</h2>
    <div class="d-flex mt-5">
    <input
      type="text"
      v-model="newTask"
      placeholder="Write New Task here..."
      class="w-100 form-control"/>
      <button class="btn btn-primary rounded-2 ms-2"
        @click="submitTask" 
        style="width: 100px">
        Submit
      </button>
      <button class="btn btn-danger rounded-2 ms-2" 
        @click="cancelNewTask"
        style="width: 100px">
        Cancel
      </button>
    </div>

  </div>

</template>

<script>

import { postTodos } from '../services.js'

export default {
  
  data(){
    return {
      newTask: "",
      newTodo: null,
    }
  },
  
  methods: {
    async submitTask() {
      try {
        // If no task, end the method
        if (this.newTask.length === 0) return;

        this.newTodo = {
          text: this.newTask,
          isDone: false,
        };
        await postTodos(this.newTodo);
      }
      catch(e) {
        this.$store.commit('addError', e.message);
      }
      //Clear the input form text
      this.newTask = "";
      this.$emit('cancel');
    },

    cancelNewTask() {
      this.$emit('cancel');
    },
  },
  
}

</script>

<style>

</style>