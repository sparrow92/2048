const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        brown: colors.warmGray,
        'brown-350': '#b6b3b1',
        'cream-1': '#ede3da',
        'cream-2': '#ecdfc9',
        'orange-1': '#edae7c',
        'orange-2': '#ef9067',
        'red-1': '#ef7562',
        'red-2': '#ee5340',
        'yellow-1': '#eacd78',
        'yellow-2': '#eaca68',
        'yellow-3': '#eac559',
        'yellow-4': '#e9c24a',
        'yellow-5': '#e9bf3d',
        'gray-1': '#363636'
      },

      spacing: {
        '300': '300px',
        '500': '500px',
      },

      transitionDuration: {
        '50': '50ms'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
