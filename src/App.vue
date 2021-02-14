<template>
  <Wrapper @up="up" @right="right" @down="down" @left="left">
    <Gameboard>
      <span class="text-5xl">{{ direction }}</span>
    </Gameboard>
  </Wrapper>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
import Gameboard from './components/Gameboard.vue'

export default {
  components: {
    Wrapper,
    Gameboard
  },

  data() {
    return {
      direction: ''
    };
  },

  methods: {
    up: function () {
      this.direction = 'Góra'
    },

    down: function () {
      this.direction = 'Dół'
    },

    left: function () {
      this.direction = 'Lewo'
    },

    right: function () {
      this.direction = 'Prawo'
    },
  }
}
</script>

<style lang="postcss">

</style>
