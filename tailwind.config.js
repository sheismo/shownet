/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./dist/index.html','./dist/app.js', "./src/**/*.{html,js}", './pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    container: {
      center: true
    },
    colors: {
      transparent: 'transparent',
      'purple': '#C6567E',
      'darkpurple': '#b74d72',
      'black': '#191A2C',
      'white': '#FFFFFF',
      'gray': colors.gray,
      yellow: colors.yellow,
      'green': '#33FF57',
      'midnight': '#121063',
      'tahiti': '#3ab7bf',
      'bubble-gum': '#ff77e9',
      'red': '#ff2c06'
    },
    extend: {
      fontFamily: {
       Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
