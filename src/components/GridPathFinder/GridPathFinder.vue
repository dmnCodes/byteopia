<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { minCostPath } from './gridPathFinder.helpers'

export default defineComponent({
  name: 'GridPathFinder',
  setup() {
    const gridInput = ref('')
    const grid = ref([])
    const minimumCost = ref(null)

    const updateGrid = () => {
      try {
        const parsedGrid = JSON.parse(gridInput.value)
        if (
          Array.isArray(parsedGrid) &&
          parsedGrid.every(
            (row) => Array.isArray(row) && row.every((cell) => typeof cell === 'number')
          )
        ) {
          grid.value = parsedGrid
        } else {
          alert('Invalid grid format. Please enter a valid 2D array of numbers.')
        }
      } catch (e) {
        alert('Invalid grid format. Please enter a valid 2D array of numbers.')
      }
    }

    const calculateMinimumCost = () => {
      if (grid.value.length === 0) {
        alert('Grid is empty. Please enter a valid grid.')
        return
      }
      minimumCost.value = minCostPath(grid.value)
    }

    const canShowMinimumCost = computed(() => !!minimumCost.value)

    return {
      gridInput,
      grid,
      minimumCost,
      updateGrid,
      calculateMinimumCost,
      canShowMinimumCost
    }
  }
})
</script>

<template>
  <div>
    <h1 class="mb-5">Grid Path Finder</h1>

    <textarea
      class="mb-1"
      v-model="gridInput"
      placeholder="Enter grid as an array of arrays of integers"
    ></textarea>

    <button class="mb-5" @click="updateGrid">Update Grid</button>

    <table v-if="grid.length" class="mb-5">
      <tr v-for="(row, rowIndex) in grid" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
      </tr>
    </table>

    <!-- <p class="mb-5" v-if="!grid.length">You need to fill in the grid first.</p> -->

    <button v-if="grid.length" @click="calculateMinimumCost">Calculate Minimum Cost</button>

    <p class="mt-2" v-if="canShowMinimumCost">Minimum Cost: {{ minimumCost }}</p>
  </div>
</template>
