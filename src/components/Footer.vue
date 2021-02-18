<template>
  <footer class="footer">
    <span>
      <strong>2048</strong> created by
      <a href="https://github.com/sparrow92">sparrow92</a>. Check source code on
    </span>
    <a href="https://github.com/sparrow92/2048">
      <button class="footer__button">
        <span>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" />
        </span>
        <span>GitHub</span>
      </button>
    </a>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
  .footer {
    @apply flex items-center text-brown-600 text-sm mt-5;
  }

  a {
    @apply text-blue-600 no-underline;
  }

  a:visited {
    @apply text-blue-600;
  }

  .footer__button {
    @apply flex items-center bg-gray-50 text-gray-800 font-bold leading-none ml-2 rounded border border-gray-300 py-1 px-2;
  }

  img {
    @apply w-5 mr-1;
  }
</style>
