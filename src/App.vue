<script setup>
import GridPathFinder from './components/GridPathFinder/GridPathFinder.vue'
</script>

<template>
  <div class="items-center justify-center bg-white min-h-screen flex">
    <div
      class="w-full bg-gray-100 rounded-lg shadow-lg max-w-md space-y-8 p-8 border border-gray-300"
    >
      <GridPathFinder />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
