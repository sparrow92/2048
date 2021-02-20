<template>
  <Wrapper @up="up" @right="right" @down="down" @left="left">
    <Header :score="score" @new-game="newGame" />
    <Gameboard>
      <Tile v-for="tile in tiles" :key="tile.id" :x="tile.x" :y="tile.y" :value="tile.value" />
      <GameOver :visible="gameOver" :score="score" @try-again="tryAgain" />
      <YouWin :visible="youWin" @continue-game="continueGame" />
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
      youWin: false,
      gameOver: false,
      tiles: [],
      score: 0,
    };
  },

  computed: {
    popup: function () {
      return this.gameOver || this.youWin;
    }
  },

  methods: {
    up: function () {
      this.newTile(1);
    },

    down: function () {
      this.newTile(1);
    },

    left: function () {
      this.newTile(1);
    },

    right: function () {
      this.newTile(1);
    },

    newGame: function () {
      this.gameOver = false;
      this.youWin = false;
      this.tiles.length = 0;
      this.score = 0;
      this.newTile(2);
    },

    newTile: function (i) {
      [...Array(i)].forEach(() => {
        if (this.tiles.length < 16) {
          do {
            var x = this.generateCoordinate();
            var y = this.generateCoordinate();
            var notNull = this.getTileValue(x, y);
          }
          while (notNull);

          this.tiles.push({
            x: x,
            y: y,
            value: this.generateValue(),
            id: this.generateId()
          });
        }
      });
    },

    getTileValue: function (x, y) {
      const array = this.tiles.find(tile => {
        return tile.x == x && tile.y == y 
      });

      return array ? array.value : null;
    },

    generateId: function () {
      return Math.random().toString(36).substring(2);
    },

    generateValue: function () {
      let number = Math.random();
      return number < 0.9 ? 2 : 4;
    },

    generateCoordinate: function () {
      return Math.floor(Math.random() * 4);
    },

    tryAgain: function () {
      this.gameOver = false;
      this.newGame();
    },

    continueGame: function () {
      this.youWin = false;
    }
  },

  mounted() {
    this.newTile(2);
  }
}
</script>