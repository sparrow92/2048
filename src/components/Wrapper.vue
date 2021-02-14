<template>
  <div
    v-autofocus
    v-touch:swipe.left="left"
    v-touch:swipe.right="right"
    v-touch:swipe.top="up"
    v-touch:swipe.bottom="down"
    @keyup.up="up"
    @keyup.down="down"
    @keyup.left="left"
    @keyup.right="right"
    tabindex="-1"
    class="wrapper"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  methods: {
    up: function () {
      this.$emit('up')
    },

    down: function () {
      this.$emit('down')
    },

    left: function () {
      this.$emit('left')
    },

    right: function () {
      this.$emit('right')
    },
  }
}
</script>

<style lang="postcss" scoped>
  .wrapper {
    @apply min-h-screen w-screen bg-yellow-100 flex items-center justify-center;
  }
</style>
