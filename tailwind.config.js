/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        stylish:["Poppins","sans-serif"]
      },
      colors:{
        blue:"#27508C"
      },
    },
  },
  plugins: [],
}