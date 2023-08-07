/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          500: "#ff3900",
          DEFAULT: "#ff3900",
        },
        accentGray: {
          50: "#f2f2f2",
          100: "#dbdbdb",
          200: "#a1a1a1",
          300: "#4d4d4d",
          400: "#b8b8b8",
          500: "#cbcbcb",
        },
        primary: {
          400: "#082940",
          500: "#004056",
          DEFAULT: "#004056",
        },
      },
    },
  },
  plugins: [],
};
