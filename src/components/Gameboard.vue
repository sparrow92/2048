<template>
  <div class="gameboard">
    <div class="gameboard__inner">
      <slot/>
    </div>
    <div class="tile-slot" v-for="(item, index) in 16" :key="index"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
  .gameboard {
    @apply relative w-300 h-300 sm:w-500 sm:h-500 grid grid-rows-4 grid-flow-col gap-2 sm:gap-4 bg-brown-400 rounded-lg p-2 sm:p-4;
  }

  .gameboard__inner {
    @apply absolute inset-0 m-1 sm:m-2;
  }

  .tile-slot {
    @apply bg-brown-350 rounded;
  }
</style>
