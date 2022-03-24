// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
    future: {},
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors,
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'Arial']
      },
      extend: {
        colors:{
          'custom-light-gray': '#F7F7F7',
          'custom-dark-gray':'#5C636E',
          'custom-yellow':'#F8B500',
          'custom-black':'#393E46',
          'custom-canvas-gray': '#F8F8F8',
        },
      },
    },
    variants: {},
    plugins: [],
  }