<template>
    <div class="home-page-view">
      <header-bar />
      <div class="hero-section">
        <h1>Welcome to Switchback Huts</h1>
        <p>Discover the beauty of [Your Location] and plan your winter adventure.</p>
        <button>Explore Now</button>
      </div>
      <div>
        <iframe width='100%' height='900px' src="https://api.mapbox.com/styles/v1/mikelash/ckrz32gte0xeg17midy435ihv.html?title=false&access_token=pk.eyJ1IjoibWlrZWxhc2giLCJhIjoiY2xwaWg4YXY3MGM1eTJrcXM4c2Q0MGZxYyJ9.JYGddBoNM7uBA5BOzS3Gfw&zoomwheel=false#11.18/43.5715/-114.7151/0/45" title="Swiss ski" style="border:none;"></iframe> 
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