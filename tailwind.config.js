/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'p-orange': 'hsl(25, 97%, 53%)',
        'n-lightGrey': 'hsl(217, 12%, 63%)',
        'n-mediumGrey': 'hsl(216, 12%, 54%)',
        'n-darkBlue': 'hsl(213, 19%, 18%)',
        'n-veryDarkBlue': 'hsl(216, 12%, 8%)',
      },
      fontFamily:{
        'overpass': ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}

