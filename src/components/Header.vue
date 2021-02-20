<template>
  <div class="header">
    <div class="header__brand">2048</div>
    <div class="flex justify-between items-center px-2 w-full">
      <div class="header__score">
        <span class="header__score--title">score:</span>
        <span class="header__score--amount">{{ animatedScore }}</span>
      </div>
      <button class="header__button" v-on:click="newGame">
        New Game
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
      tweenedScore: 0
    };
  },

  computed: {
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
    }
  },

  methods: {
    newGame: function() {
      this.$emit("new-game");
    }
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    @apply flex flex-col sm:flex-row justify-between items-center mb-5;
  }

  .header__brand {
    @apply text-brown-500 font-bold sm:mr-10 flex justify-center h-full mb-4 sm:mb-0 text-5xl sm:text-6xl leading-none;
  }

  .header__score {
    @apply flex flex-col uppercase;
  }

  .header__score--title {
    @apply text-xs font-bold text-brown-700 mb-0;
  }

  .header__score--amount {
    @apply text-brown-700 font-bold text-xl;
  }

  .header__button {
    @apply flex items-center justify-center font-bold text-brown-700 bg-yellow-300 py-2 px-3 sm:py-4 sm:px-6 sm:text-xl rounded sm:ml-auto;
  }
</style>
