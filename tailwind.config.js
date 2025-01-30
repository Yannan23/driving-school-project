/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

    "./index.css",
    "./index.html",
    "./src/App.css",
    "./src/pages/**/*.{html,js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'dark-color': '#0F1C2F',
        'white-color': '#F1F1F1',
        'yellow-color': '#FDB90A',
        'orange-color': '#FF641A',
        'red-color': '#F31717',
        'font-dark-color': '#2d2b2b',
        'light-color': '#F1F1F1'
      }
    },
    // screens: {
    //   'max-sm': { 'max': '690px' },
    //   'max-md': { 'max': '960px' },
    //   'max-lg': { 'max': '1029px' },
    //   'max-xl': { 'max': '1220px' },
    // }
  },
  plugins: [],
}

