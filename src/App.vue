<template>
  <img src="./assets/hut.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
    <!-- <home-Page-View />
    <huts-view /> -->
    <!-- <header-bar /> -->
    <home-page-view />
    <!-- <huts-view /> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePageView from './Views/HomePageView.vue'
// import hutsView from './Views/hutsView.vue'
// import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomePageView,
    // hutsView,
    // HeaderBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
