<template>
  <div class="header">
    <div class="header__brand">2048</div>
    <div class="header__score">
      <span class="header__score--title">score:</span>
      <span class="header__score--amount">{{ animatedScore }}</span>
    </div>
    <div class="header__score">
      <span class="header__score--title">best score:</span>
      <span class="header__score--amount">{{ animatedBestScore }}</span>
    </div>
    <div>
      <button class="header__button" v-on:click="newGame">
        <strong>New Game</strong>
      </button>
    </div>
  </div>
</template>

<script>
import { TweenLite } from "gsap/TweenMax";

export default {
  props: {
    score: Number
  },

  data: function() {
    return {
      bestScore: 0,
      tweenedScore: 0,
      tweenedBestScore: 0
    };
  },

  computed: {
    animatedBestScore: function() {
      return this.tweenedBestScore.toFixed(0);
    },

    animatedScore: function() {
      return this.tweenedScore.toFixed(0);
    }
  },
  watch: {
    score: function(newValue) {
      if (newValue == 0) {
        this.tweenedScore = this.score;
      }
      TweenLite.to(this.$data, 0.5, { tweenedScore: newValue });
      if (newValue > this.bestScore) {
        this.bestScore = this.score;
      }
    },

    bestScore: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedBestScore: newValue });
    }
  },

  methods: {
    newGame: function() {
      this.$emit("newGame");
    }
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    width: 500px;
    @apply flex justify-between items-center mb-5;
  }

  .header__brand {
    @apply text-brown-500 text-2xl font-bold;
  }

  .header__score {
    @apply flex flex-col uppercase;
  }

  .header__score--title {
    @apply text-sm mb-2;
  }

  .header__score--amount {
    @apply text-brown-700 text-lg;
  }

  .header__button {
    @apply text-brown-700 bg-yellow-300 p-4 text-lg rounded;
  }
</style>
