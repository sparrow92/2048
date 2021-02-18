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
    @apply absolute transition-all duration-75 ease-in w-1/4 h-1/4 p-2;
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
    @apply flex items-center justify-center h-full w-full bg-brown-700 rounded text-brown-300 text-4xl font-bold;
  }

  .shine {
    box-shadow: 0px 0px 22px 3px rgba(234, 205, 120, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .tile--2 {
    background: #ede3da;
    color: #766e66;
    @apply text-5xl;
  }

  .tile--4 {
    background: #ecdfc9;
    color: #766e66;
    @apply text-5xl;
  }

  .tile--8 {
    background: #edae7c;
    @apply text-white text-5xl;
  }

  .tile--16 {
    background: #ef9067;
    @apply text-white text-5xl;
  }

  .tile--32 {
    background: #ef7562;
    @apply text-white text-5xl;
  }

  .tile--64 {
    background: #ee5340;
    @apply text-white text-5xl;
  }

  .tile--128 {
    background: #eacd78;
    @apply text-white;
  }

  .tile--256 {
    background: #eaca68;
    @apply text-white;
  }

  .tile--512 {
    background: #eac559;
    @apply text-white;
  }

  .tile--1024 {
    background: #e9c24a;
    @apply text-white;
  }

  .tile--2048 {
    background: #e9bf3d;
    @apply text-white;
  }

  .tile--4096 {
    background: #363636;
    @apply text-white;
  }

  .tile--8192 {
    background: #363636;
    @apply text-white;
  }

  .tile--16384 {
    background: #363636;
    @apply text-3xl text-white;
  }

</style>
