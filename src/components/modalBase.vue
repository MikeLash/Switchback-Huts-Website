<template>
    <div class="modal" v-if="isVisible">
      <div class="modal-content">
        <slot></slot>
        <button @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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