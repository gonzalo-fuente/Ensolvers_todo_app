<template>

  <Header />
  <Errors v-if="showErrors" @closeErrors="closeErrors"/>
  <ToDoCreate v-if="showCreate" @cancel="cancelNewTask"/>
  <ToDoEdit v-if="showEdit" :task="task" @cancel="cancelEdit"/>
  <ToDoList v-if="showList" @editTask="editTask($event)" @addTask="addTask"/>

</template>

<script>

import Header from './components/Header.vue'
import ToDoCreate from './components/ToDoCreate.vue'
import ToDoEdit from './components/ToDoEdit.vue'
import ToDoList from './components/ToDoList.vue'
import Errors from './components/Errors.vue'

export default {
  name: 'App',
  components: {
    Header,
    ToDoCreate,
    ToDoEdit,
    ToDoList,
    Errors
  },

  data() {
    return {
      showCreate: false,
      showEdit: false,
      showList: true,
      task: null,
    }
  },

  methods: {
    addTask() {
      this.showList = false;
      this.showCreate = true;
    },
    
    editTask(task) {
      this.showList = false;
      this.showEdit = true;
      this.task = task;
    },

    cancelEdit() {
      this.showList = true;
      this.showEdit = false;
    },

    cancelNewTask() {
      this.showList = true;
      this.showCreate = false;
    },

    closeErrors() {
      this.showErrors = false;
    },
  },

  computed: {
    showErrors() {
      return this.$store.state.showErrors;
    }
  },

}

</script>

<style>

</style>
