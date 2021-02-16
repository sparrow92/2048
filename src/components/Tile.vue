<template>
  <div class="tile" :class="`grid-column-${x} grid-row-${y}`">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    x: Number,
    y: Number,
    value: Number
  },
}
</script>

<style lang="postcss" scoped>
  .tile {
    @apply absolute transition-all ease-in bg-brown-700 text-brown-300 font-bold rounded w-full h-full flex items-center justify-center;
  }
  .grid-column-0 { grid-column: 1 / 2; }
  .grid-column-1 { grid-column: 2 / 3; }
  .grid-column-2 { grid-column: 3 / 4; }
  .grid-column-3 { grid-column: 4 / 4; }
  .grid-row-0 { grid-row: 1 / 2; }
  .grid-row-1 { grid-row: 2 / 3; }
  .grid-row-2 { grid-row: 3 / 4; }
  .grid-row-3 { grid-row: 4 / 4; }
</style>
