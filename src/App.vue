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
      return this.gameOver || this.youWin
    },

    nextUp: function() {
      var result = false;
      for (var x = 0; x < 4; x++) {
        var y = 0;
        var row = [];
        while (y < 4) {
          row.push(this.getTileValue(x, y));
          y++;
        }
        if (this.isMovePossible(row)) {
          result = true;
          break;
        }
      }
      return result;
    },

    nextRight: function() {
      var result = false;
      for (var y = 0; y < 4; y++) {
        var x = 3;
        var row = [];
        while (x >= 0) {
          row.push(this.getTileValue(x, y));
          x--;
        }
        if (this.isMovePossible(row)) {
          result = true;
          break;
        }
      }
      return result;
    },

    nextDown: function() {
      var result = false;
      for (var x = 0; x < 4; x++) {
        var y = 3;
        var row = [];
        while (y >= 0) {
          row.push(this.getTileValue(x, y));
          y--;
        }
        if (this.isMovePossible(row)) {
          result = true;
          break;
        }
      }
      return result;
    },

    nextLeft: function() {
      var result = false;
      for (var y = 0; y < 4; y++) {
        var x = 0;
        var row = [];
        while (x < 4) {
          row.push(this.getTileValue(x, y));
          x++;
        }
        if (this.isMovePossible(row)) {
          result = true;
          break;
        }
      }
      return result;
    },

    noStep: function() {
      return !this.nextLeft && !this.nextUp && !this.nextRight && !this.nextDown
    },
  },

  methods: {
    up: function () {
      if (this.nextUp && !this.popup) {
        this.newTile(1);
      }
    },

    down: function () {
      if (this.nextDown && !this.popup) {
        this.newTile(1);
      }
    },

    left: function () {
      if (this.nextLeft && !this.popup) {
        this.newTile(1);
      }
    },

    right: function () {
      if (this.nextRight && !this.popup) {
        this.newTile(1);
      }
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
            var isTile = this.getTileValue(x, y);
          }
          while (isTile);

          this.tiles.push({
            x: x,
            y: y,
            value: this.generateValue(),
            id: this.generateId()
          });
        }
      });
    },

    isMovePossible: function (array) {
      let tiles = array.filter(x => x > 0);

      if (tiles.length == 0) {
        return false;
      }

      array = array.slice(0, tiles.length);

      if (array.filter(x => x == null).length > 0) {
        return true;
      }

      if (array.length == 1) {
        return false;
      }

      if (array.length > 1) {
        for (var i = 1; i < array.length; i++) {
          if (array[i] == array[i - 1] || !array[i - 1] || !array[i]) {
            return true;
          }
        }
      }
    },

    getTileValue: function (x, y) {
      const array = this.tiles.find(tile => {
        return tile.x == x && tile.y == y 
      });

      return array ? array.value : null;
    },

    getTileIndex: function (x, y) {
      return this.tiles.findIndex((tile) => {
        return tile.x == x && tile.y == y
      });
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
  },

  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpdateUI = true;
      });
    }
  }
}
</script>