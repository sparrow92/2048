<template>
  <Wrapper @up="up" @right="right" @down="down" @left="left">
    <Header/>
    <Gameboard>
      <span class="block test__ocb text-5xl">{{ direction }}</span>
    </Gameboard>
    <Footer/>
  </Wrapper>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
import Header from './components/Header.vue'
import Gameboard from './components/Gameboard.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Wrapper,
    Header,
    Gameboard,
    Footer
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
.test {
  @apply bg-red-500;
  &__ocb {
    @apply bg-red-700;
  }
}
</style>
