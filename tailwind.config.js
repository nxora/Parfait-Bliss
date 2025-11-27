/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        scaleIn: "scaleIn 0.4s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.92)" },
          "100%": { transform: "scale(1)" },
        },
      },

    },
  },
  plugins: [],
}