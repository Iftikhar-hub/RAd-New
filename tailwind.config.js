/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        figtree: ['Figtree'],
      },
      screens: {
        '3xl': '1920px',   
      },
      fontSize: {
      responsive: "clamp(10px, 3vw, 18px)",
    },
    },
  },
  plugins: [],
}

