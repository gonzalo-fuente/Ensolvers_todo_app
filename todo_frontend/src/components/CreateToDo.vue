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
      <button class="btn btn-primary rounded-2 ms-2" @click="submitTask">
        Submit
      </button>
    </div>

    <!-- Error Section -->
    <div v-show="errors.length" class="alert alert-danger mt-5" role="alert">
      <div v-for="(error, index) in errors" :key="index">
        {{ error.message }}
      </div>
    </div>   

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
      </tbody>
    </table>
  </div>
</template>

<script>
import { getTodos, postTodos, putTodos, deleteTodos } from '../services.js'

export default {

  data() {
    return {
      newTask: "",
      newTodo: {},
      tasks: [],
      errors: []
    };
  },

  async created() {
    try {
      this.tasks = await getTodos();
      this.tasks.sort((a,b)=>a.id-b.id);
    }
    catch(e) {
      this.errors.push(e);
    }
    
  },

  methods: {
    async deleteTask(index) {
      try {
        await deleteTodos(this.tasks[index].id)
        this.tasks.splice(index, 1);
      }
      catch(e) {
        this.errors.push(e);
      }
    },

    async editStatus(index) {
      try {
        this.tasks[index].isDone = !this.tasks[index].isDone;
        await putTodos(this.tasks[index], this.tasks[index].id);
      }
      catch(e) {
        this.errors.push(e);
      }
    },

    editTask(index) {
      this.$emit('editTask', this.tasks[index], this.errors)
    },

    async submitTask() {
      try {
        // If no task, end the method
        if (this.newTask.length === 0) return;

        this.newTodo = {
          text: this.newTask,
          isDone: false,
        };

      
        this.newTodo.id = await postTodos(this.newTodo);
        this.tasks.push(this.newTodo);
      }
      catch(e) {
        this.errors.push(e);
      }
      //Clear the input form text
      this.newTask = "";
    },
  },
};
</script>

<style>

</style>