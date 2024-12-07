/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "myGreen" : "#66e094",
        "myProfile" : "#00a884",
      }
    },
  },
  plugins: [],
}

