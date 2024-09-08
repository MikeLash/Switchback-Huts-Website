<template>
    <div class="modal" v-if="isVisible">
      <div class="modal-content">
        <mapbox-gl
          :map-options="{
            accessToken: 'YOUR_MAPBOX_ACCESS_TOKEN',
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11'
          }"
        >
          <div id="map"></div>
        </mapbox-gl>
        <button @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import MapboxGL from 'vue-mapbox-gl';
  
  export default {
    components: {
      // eslint-disable-next-line vue/no-unused-components
      MapboxGL
    },
    props: {
      isVisible: Boolean
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }
  </script>