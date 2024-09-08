<template>
    <div class="huts-page">
      <h1>Huts</h1>
      <hut-filter @filter="applyFilter"></hut-filter>
      <div class="hut-list">
        <hut-card v-for="hut in filteredHuts" :key="hut.id" :hut="hut" @show-details="showHutDetails"></hut-card>
      </div>
      <hut-details-modal v-if="showHutDetailsModal" :is-visible="showHutDetailsModal" :hut="selectedHut" @close="closeHutDetailsModal"></hut-details-modal>
    </div>
  </template>
  
  <script>
  import HutFilter from '../components/HutFilter.vue';
  import HutCard from '../components/HutCard.vue';
  import HutDetailsModal from '../components/HutDetailsModal.vue';
  
  export default {
    components: {
      HutFilter,
      HutCard,
      HutDetailsModal
    },
    data() {
      return {
        huts: [
          // ... your huts data
        ],
        filteredHuts: [],
        showHutDetailsModal: false,
        selectedHut: null
      };
    },
    created() {
      this.filteredHuts = this.huts;
    },
    methods: {
      applyFilter(filters) {
        this.filteredHuts = this.huts.filter(hut => {
          // Implement filtering logic based on filters
          return true; // Replace with your filtering logic
        });
      },
      showHutDetails(hut) {
        this.showHutDetailsModal = true;
        this.selectedHut = hut;
      },
      closeHutDetailsModal() {
        this.showHutDetailsModal = false;
      }
    }
  };
  </script>