/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'default-bg': "#000000",
        'default-text': "rgb(229,229,229)",
        'accent-text': "#6666EE",
        'dark-text': "rgb(170,170,170)",
        'default-border': '#33353F',//'rgb(50,50,50)',
        'accent-from': '#6666EE',
        'accent-to': '#FF3091',
      }
    },
  },
  plugins: [],
}

