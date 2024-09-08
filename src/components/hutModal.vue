<template>
    <modal :is-visible="isVisible">
      <div class="hut-details">
        <h2>{{ hut.name }}</h2>
        <img :src="hut.image" alt="Hut Image">
        <p>{{ hut.description }}</p>
        </div>
    </modal>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: Boolean,
      hut: Object
    }
  }
  </script>