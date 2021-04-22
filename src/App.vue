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
import _ from 'lodash'
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

  watch: {
    noStep: function (newValue) {
      if (newValue) {
        this.gameOver = true;
      }
    },

    largestTile: function (newValue) {
      if (newValue === 2048) {
        this.youWin = true;
      }
    }
  },

  computed: {
    popup: function () {
      return this.gameOver || this.youWin
    },

    largestTile: function () {
      return Math.max.apply(Math, this.tiles.map(element => element.value));
    },

    nextUp: function() {
      let result = false;
      for (let x = 0; x < 4; x++) {
        var y = 0, row = [];
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
      let result = false;
      for (let y = 0; y < 4; y++) {
        var x = 3, row = [];
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
      let result = false;
      for (let x = 0; x < 4; x++) {
        var y = 3, row = [];
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
      let result = false;
      for (let y = 0; y < 4; y++) {
        var x = 0, row = [];
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
    up: _.throttle(function () {
      if (this.nextUp && !this.popup) {
        for (let a = 0; a < 4; a++) {
          var n = 0, row = [];
          while (n < 4) {
            let value = this.getTileValue(a, n), index = this.getTileIndex(a, n);
            if (value > 0) {
              row.push(this.tiles[index]);
            }
            n++;
          }
          this.sortRow(row, 0, -1);
        }
        this.newTile(1);
      }
    }, 500),

    down: _.throttle(function () {
      if (this.nextDown && !this.popup) {
        for (let a = 0; a < 4; a++) {
          var n = 3, row = [];
          while (n >= 0) {
            let value = this.getTileValue(a, n), index = this.getTileIndex(a, n);
            if (value > 0) {
              row.push(this.tiles[index]);
            }
            n--;
          }
          this.sortRow(row, 0, 1);
        }
        this.newTile(1);
      }
    }, 500),

    left: _.throttle(function () {
      if (this.nextLeft && !this.popup) {
        for (let b = 0; b < 4; b++) {
          var n = 0, row = [];
          while (n < 4) {
            let value = this.getTileValue(n, b), index = this.getTileIndex(n, b);
            if (value > 0) {
              row.push(this.tiles[index]);
            }
            n++;
          }
          this.sortRow(row, -1, 0);
        }
        this.newTile(1);
      }
    }, 500),

    right: _.throttle(function () {
      if (this.nextRight && !this.popup) {
        for (let b = 0; b < 4; b++) {
          var n = 3, row = [];
          while (n >= 0) {
            let value = this.getTileValue(n, b), index = this.getTileIndex(n, b);
            if (value > 0) {
              row.push(this.tiles[index]);
            }
            n--;
          }
          this.sortRow(row, 1, 0);
        }
        this.newTile(1);
      }
    }, 500),

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

    moveTile: function (a, b, c, d) {
      return new Promise (resolve => {
        let index = this.getTileIndex(a, b);
        this.tiles[index].x += c;
        this.tiles[index].y += d;
        resolve();
      });
    },

    doubleTile: function (a, b) {
      setTimeout(() => {
        let index = this.getTileIndex(a, b);
        this.tiles[index].value *= 2;
        this.score += this.tiles[index].value;
      }, 100);
    },

    removeTile: function (a, b) {
      setTimeout(() => {
        let index = this.getTileIndex(a, b);
        this.tiles.splice(index, 1);
      }, 100);
    },

    moveAndDouble: function (a, b, c, d) {
      this.moveTile(a, b, c, d).then(
        this.doubleTile(a + c, b + d)
      );
    },

    moveAndRemove: function (a, b, c, d) {
      this.moveTile(a, b, c, d).then(
        this.removeTile(a + c, b + d)
      );
    },

    sortRow: function (row, vectorX, vectorY) {
      let absX = Math.abs(vectorX),
          absY = Math.abs(vectorY),
          counter = (vectorX == 1 || vectorY == 1) ? 3 : 0;

      for (let i = 0, line = counter; i < row.length; i++, line += -1 * (vectorY + vectorX)) {
        var position1 = absX * row[i].x + absY * row[i].y,
            dist1 = Math.abs(line - position1);

        if (typeof row[i+1] !== 'undefined') {
          var position2 = (absX * row[i+1].x) + (absY * row[i+1].y),
              dist2 = Math.abs(line - position2);
        }

        if (typeof row[i+1] !== 'undefined' && row[i].value == row[i+1].value) {
          this.moveAndRemove(row[i].x, row[i].y, vectorX * dist1, vectorY * dist1);
          this.moveAndDouble(row[i+1].x, row[i+1].y, vectorX * dist2, vectorY * dist2);
          i++;
        }
        else {
          this.moveTile(row[i].x, row[i].y, vectorX * dist1, vectorY * dist1);
        }
      }
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