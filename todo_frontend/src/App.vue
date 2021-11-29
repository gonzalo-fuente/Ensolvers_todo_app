<template>

  <div class="container" style="max-width: 720px">
    
    <!-- Header Section -->
    <h1 class="display-5 text-center mt-5">
      <i class="fas fa-clipboard-list text-primary"></i>
      My<span class="text-primary">ToDo</span>App 
    </h1>
  </div>
  <CreateToDo v-if="showCreate" @editTask="editTask"/>
  <EditToDo v-if="!showCreate" :task="task" :errors="errors" @cancel="cancelEdit"/>

</template>

<script>
import CreateToDo from './components/CreateToDo'
import EditToDo from './components/EditToDo'

export default {
  name: 'App',
  components: {
    CreateToDo,
    EditToDo
  },

  data() {
    return {
      showCreate: true,
      task: null,
      errors: null
    }
  },

  methods: {
    editTask(task, errors) {
      this.showCreate = false;
      this.task = task;
      this.errors = errors;
    },

    cancelEdit() {
      this.showCreate = true;
    }
  }
}
</script>

<style>

</style>
