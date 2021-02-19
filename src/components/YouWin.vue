<template>
  <div class="youwin__container">
    <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
      <div v-show="visible" class="youwin__background"></div>
    </transition>
    <transition enter-active-class="animate__animated animate__tada" leave-active-class="animate__animated animate__bounceOutDown">
      <div v-show="visible" class="youwin__content">
        <h1 class="youwin__heading">You Win!</h1>
        <span class="youwin__text"><strong>Congratulations!</strong></span>
        <button class="youwin__button" v-on:click="continueGame">
          Click to Continue
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  methods: {
    continueGame: function() {
      this.$emit("continue-game");
    }
  }
};
</script>

<style lang="postcss" scoped>
  .youwin__container {
    @apply absolute inset-0 pointer-events-none text-brown-900 z-50;
  }

  .youwin__background {
    background-color: rgba(250, 248, 239, 0.65);
    @apply w-full h-full rounded-lg;
  }

  .youwin__content {
    @apply absolute inset-0 flex flex-col justify-center items-center pointer-events-auto;
  }

  .youwin__heading {
    @apply text-4xl sm:text-6xl mb-4 font-bold;
  }

  .youwin__text {
    @apply text-2xl sm:text-4xl mb-5;
  }

  .youwin__button {
    @apply flex items-center justify-center font-bold text-brown-700 bg-yellow-300 py-2 px-3 sm:py-4 sm:px-6 sm:text-xl rounded;
  }
</style>
