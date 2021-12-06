<template>

  <div class="container" style="max-width: 720px">
      
    <!-- Todo List Section -->
    <h2 class="text-center mt-5">Task's List</h2>
    <table class="table table-striped table-hover mt-5">
      <thead>
        <tr>
        <th scope="col" style="width: 50px">Status</th>
        <th scope="col">Task</th>
        <th scope="col" class="text-center" style="width: 50px">Edit</th>
        <th scope="col" class="text-center" style="width: 50px">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="task.id">
        <td class="text-center">
          <input class="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          v-model= task.isDone
          @click="editStatus(index)"
          >
        </td>
        <td>
          <div>
          {{ task.text }}
          </div>
        </td>
        <td class="text-center">
          <div @click="editTask(index)">
          <i class="fas fa-pencil-alt text-primary"></i>
          </div>
        </td>
        <td class="text-center">
          <div @click="deleteTask(index)">
          <i class="fas fa-trash-alt text-primary"></i>
          </div>
        </td>
        </tr>
        <tr>
          <td></td>
          <td class="fst-italic fw-bold">Add a task...</td>
          <td class="text-center text-primary" @click="addTask">
              <i class="fas fa-plus"></i>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
</div>

</template>

<script>

import { getTodos, putTodos, deleteTodos } from '../services.js'

export default {

  data() {
    return {
      tasks: [],
    };
  },

  async created() {
    try {
      this.tasks = await getTodos();
    }
    catch(e) {
      this.$store.commit('addError', e.message);
    }
    
  },

  methods: {
    async deleteTask(index) {
      try {
        await deleteTodos(this.tasks[index].id)
        this.tasks.splice(index, 1);
      }
      catch(e) {
        this.$store.commit('addError', e.message);
      }
    },

    async editStatus(index) {
      try {
        this.tasks[index].isDone = !this.tasks[index].isDone;
        await putTodos(this.tasks[index], this.tasks[index].id);
      }
      catch(e) {
        this.$store.commit('addError', e.message);
      }
    },

    editTask(index) {
      this.$emit('editTask', this.tasks[index]);
    },

    addTask() {
      this.$emit('addTask');
    },
  },

}

</script>

<style>

</style>