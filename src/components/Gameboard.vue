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
    @apply relative grid grid-rows-4 grid-flow-col gap-4 bg-brown-400 rounded-lg p-4;
    width: 500px;
    height: 500px; 
  }

  .gameboard__inner {
    @apply absolute inset-0 m-2;
  }

  .tile-slot {
    @apply rounded bg-brown-300;
  }
</style>
