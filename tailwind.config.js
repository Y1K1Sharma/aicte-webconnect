const { default: daisyui } = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      height: {
        "half-screen": "50vh", // 50% of the viewport height
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },

  plugins: [require("daisyui"), require("flowbite/plugin"),'tailwindcss-textshadow'],
};
