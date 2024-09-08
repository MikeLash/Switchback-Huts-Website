<template>
    <div class="hut-card">
      <img :src="hut.image" alt="Hut Image">
      <h2>{{ hut.name }}</h2>
      <p>{{ hut.description }}</p>
      <button @click="showDetails">View Details</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      hut: Object
    },
    methods: {
      showDetails() {
        // Emit an event to show the hut details modal
        this.$emit('show-details', this.hut);
      }
    }
  }
  </script>