<template>
  <header>
    <div class="hut">
      <img src="hut.png" alt="">
    </div>
    <nav>
      <ul>
        <li><router-link to="/huts">Huts</router-link></li>
        <li><router-link to="/winter-fun">Winter Fun</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/logistics">Logistics</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script></script>

<style scoped>
.hut image {
  width: 10;
  height: 10;
}
ul {
  display: flex;
  list-style: none;
}
nav {
  display: flex;
  justify-content: center; /* Center the navigation menu */
}
li {
  margin: 0 10px;
}
</style>