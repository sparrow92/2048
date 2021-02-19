<template>
  <div class="gameover__container">
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <div v-show="visible" class="gameover__background"></div>
    </transition>

    <transition enter-active-class="animate__animated animate__shakeX" leave-active-class="animate__animated animate__bounceOutDown">
      <div v-show="visible" class="gameover__content">
        <h1 class="gameover__heading">Game Over!</h1>
        <span class="gameover__text">Your score:<strong> {{ score }}</strong></span>
        <button class="gameover__button" @click="tryAgain">
          Try Again!
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    score: Number
  },

  methods: {
    tryAgain: function() {
      this.$emit("try-again");
    }
  }
};
</script>

<style lang="postcss" scoped>
  .gameover__container {
    @apply absolute inset-0 pointer-events-none text-brown-900 z-50;
  }

  .gameover__background {
    background-color: rgba(250, 248, 239, 0.65);
    @apply w-full h-full rounded-lg;
  }

  .gameover__content {
    @apply absolute inset-0 flex flex-col justify-center items-center pointer-events-auto;
  }

  .gameover__heading {
    @apply text-4xl sm:text-6xl mb-4 font-bold;
  }

  .gameover__text {
    @apply text-2xl sm:text-4xl mb-5;
  }

  .gameover__button {
    @apply flex items-center justify-center font-bold text-brown-700 bg-yellow-300 py-2 px-3 sm:py-4 sm:px-6 sm:text-xl rounded;
  }
</style>