/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        'dark_cyan': 'hsl(180, 29%, 50%)',
        'grayish_cyan': 'hsl(180, 52%, 96%)',
        'light_grayish_cyan': 'hsl(180, 31%, 95%)',
        'dark_grayish_cyan': 'hsl(180, 8%, 52%)',
        'very_dark_grayish_cyan': 'hsl(180, 14%, 20%)'
      },
      screens: {
        mb: { min: "0", max: "767px" }
      },
    },
  },
  plugins: [],
}

