<template>
  <Wrapper @up="up" @right="right" @down="down" @left="left">
    <Header/>
    <Gameboard>
      <Tile :x="x" :y="y" :value="64" />
    </Gameboard>
    <Footer/>
  </Wrapper>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
import Header from './components/Header.vue'
import Gameboard from './components/Gameboard.vue'
import Tile from './components/Tile.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Wrapper,
    Header,
    Gameboard,
    Tile,
    Footer
  },

  data() {
    return {
      x: 0,
      y: 0
    };
  },

  methods: {
    up: function () {
      --this.y
    },

    down: function () {
      ++this.y
    },

    left: function () {
      --this.x
    },

    right: function () {
      ++this.x
    },
  }
}
</script>

<style lang="postcss">
</style>
