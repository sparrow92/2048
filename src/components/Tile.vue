<template>
  <div class="tile__wrapper" :class="`column-${x} row-${y}`">
    <div :class="[`tile tile--${value}`, { 'shine':  isShining}]">
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

  computed: {
    isShining: function() { 
      return this.value > 64 && this.value < 4048
    }
  }
}
</script>

<style lang="postcss" scoped>
  .tile__wrapper {
    @apply absolute transition-all duration-50 ease-in w-1/4 h-1/4 p-1 sm:p-2;
  }

  .column-0 { 
    @apply left-0; 
  }

  .column-1 { 
    @apply left-1/4; 
  }

  .column-2 { 
    @apply left-2/4; 
  }

  .column-3 { 
    @apply left-3/4; 
  }

  .row-0 { 
    @apply top-0; 
  }

  .row-1 { 
    @apply top-1/4; 
  }

  .row-2 { 
    @apply top-2/4; 
  }

  .row-3 { 
    @apply top-3/4; 
  }

  .tile {
    @apply flex items-center justify-center h-full w-full bg-gray-1 text-white rounded text-2xl sm:text-4xl font-bold;
  }

  .shine {
    box-shadow: 0px 0px 22px 3px rgba(234, 205, 120, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .tile--2 {
    @apply bg-cream-1 text-brown-500 text-3xl sm:text-5xl;
  }

  .tile--4 {
    @apply bg-cream-2 text-brown-500 text-3xl sm:text-5xl;
  }

  .tile--8 {
    @apply bg-orange-1 text-white text-3xl sm:text-5xl;
  }

  .tile--16 {
    @apply bg-orange-2 text-white text-3xl sm:text-5xl;
  }

  .tile--32 {
    @apply bg-red-1 text-white text-3xl sm:text-5xl;
  }

  .tile--64 {
    @apply bg-red-2 text-white text-3xl sm:text-5xl;
  }

  .tile--128 {
    @apply bg-yellow-1 text-white;
  }

  .tile--256 {
    @apply bg-yellow-2 text-white;
  }

  .tile--512 {
    @apply bg-yellow-3 text-white;
  }

  .tile--1024 {
    @apply bg-yellow-4 text-white;
  }

  .tile--2048 {
    @apply bg-yellow-5 text-white;
  }
</style>
