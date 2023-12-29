/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FA782F',
        secondary: '#fcb993',
        background: '#F5F5F5'
      }
    },
  },
  plugins: [],
}

