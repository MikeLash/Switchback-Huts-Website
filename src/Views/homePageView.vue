<template>
    <div class="home-page-view">
      <header-bar />
      <div class="hero-section">
        <h1>Welcome to Switchback Huts</h1>
        <p>Discover the beauty of [Your Location] and plan your winter adventure.</p>
        <button>Explore Now</button>
      </div>
      <section class="featured-huts">
        <h2>Featured Huts</h2>
        <div class="hut-cards">
          </div>
      </section>
      <section class="winter-fun">
        <h2>Winter Fun Activities</h2>
        <div class="activity-cards">
          </div>
      </section>
    </div>
  </template>
  
  <script>
  import HeaderBar from '../components/HeaderBar.vue';
  
  export default {
    components: {
      HeaderBar
    }
  };
  </script>