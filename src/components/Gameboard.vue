<template>
  <div class="gameboard">
    <div class="gameboard__inner">
      <slot/>
    </div>
    
    <div class="tile-slot" v-for="(item,index) in 16" :key="index"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
  .gameboard {
    @apply relative bg-brown-400 rounded-lg grid grid-rows-4 grid-flow-col gap-4 p-4;
    width: 500px;
    height: 500px; 
  }

  .gameboard__inner {
    @apply top-0 left-0 border-2 absolute h-full w-full bg-brown-100 opacity-50;
  }

  .tile-slot {
    @apply rounded bg-brown-300;
  }
</style>
