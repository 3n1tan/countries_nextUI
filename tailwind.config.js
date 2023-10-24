/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/theme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
             "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",            
            ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        50: '50%',
        16: '4rem',
      }
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
  darkMode: "class",
  plugins: [nextui()],
};