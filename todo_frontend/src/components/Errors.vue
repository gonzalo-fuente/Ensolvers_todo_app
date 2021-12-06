<template>
    
  <div class="container" style="max-width: 720px">
      
    <!-- Errors Section -->
    <div class="alert alert-danger mt-5" role="alert">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="fst-italic mb-0">Found {{ errors.size }} errors...</p>
        <div @click="closeErrors">
          <i class="fas fa-window-close"></i>
        </div>
      </div>
      <p class="mb-2" v-for="error in errors" :key="error">{{ error }}</p>
    </div>

  </div>

</template>

<script>

export default {

  data () {
    return {
    }
  },

  methods: {
    closeErrors() {
      this.$store.commit('clearErrors');
      //this.$emit('closeErrors');
    },
  },

  computed: {
    errors() {
      return this.$store.state.errors;
    }
  },

}

</script>

<style>

</style>