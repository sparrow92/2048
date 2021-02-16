const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: colors.warmGray
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
