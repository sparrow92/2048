<template>
  <div class="tile" :class="`column-${x} row-${y}`">
    <div class="tile__inner">
      {{ value }}
    </div>
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
    @apply absolute transition-all ease-in  w-1/4 h-1/4 p-2;
  }
  .tile__inner {
    @apply bg-brown-700 text-brown-300 font-bold rounded flex items-center justify-center h-full w-full;
  }
  .column-0 { @apply left-0; }
  .column-1 { @apply left-1/4; }
  .column-2 { @apply left-2/4; }
  .column-3 { @apply left-3/4; }
  .row-0 { @apply top-0; }
  .row-1 { @apply top-1/4; }
  .row-2 { @apply top-2/4; }
  .row-3 { @apply top-3/4; }
</style>
