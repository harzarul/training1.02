/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "rgba(0,0,0,0.9)",
        blue: "rgba(0,255,189,0.1)",
        gray: "rgba(43, 43, 43, 1)",
        dimGray: "rgba(59, 59, 59, 1)",
        purple: "#A259FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "280px",
      ss: "620px",
      sm: "768px",
      md: "974px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};