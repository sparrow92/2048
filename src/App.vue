<template>
  <Wrapper @up="up" @right="right" @down="down" @left="left">
    <Header :score="value"/>
    <Gameboard>
      <Tile :x="x" :y="y" :value="value" />
      <template v-slot:notifications>
        <GameOver :visible="gameOver" :score="value" @try-again="tryAgain" />
        <YouWin :visible="youWin" @continue-game="continueGame" />
      </template>
    </Gameboard>
    <Footer/>
  </Wrapper>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
import Header from './components/Header.vue'
import Gameboard from './components/Gameboard.vue'
import Tile from './components/Tile.vue'
import YouWin from './components/YouWin.vue'
import GameOver from './components/GameOver.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Wrapper,
    Header,
    Gameboard,
    Tile,
    YouWin,
    GameOver,
    Footer
  },

  data() {
    return {
      x: 1,
      y: 1,
      value: 2,
      youWin: false,
      gameOver: false
    };
  },

  methods: {
    up: function () {
      --this.y
      this.youWin = true
    },

    down: function () {
      ++this.y
      this.gameOver = true
    },

    left: function () {
      --this.x
    },

    right: function () {
      ++this.x
      this.value *= 2;
    },

    tryAgain: function () {
      this.gameOver = false;
    },

    continueGame: function () {
      this.youWin = false;
    }
  }
}
</script>

<style lang="postcss">
</style>
