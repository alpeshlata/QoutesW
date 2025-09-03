/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./contact.html",
    "./terms.html",
    "./privacy.html",
    "./**/*.js"  // in case you use Tailwind classes inside JS
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'], // example custom font
      },
      colors: {
        brand: '#ff0080', // your custom color
      },
    },
  },
  plugins: [],
}
