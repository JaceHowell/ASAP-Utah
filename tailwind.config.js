/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-green': '#45837E'
      },
      fontFamily: {
        sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

