/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        "nav-light": "#8CB9BD",
        "body-light": "#ECB159",
        "light-color": "#FEFBF6",
        "dark-color": "#1E2525",
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
