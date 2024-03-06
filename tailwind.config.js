/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pixelify-sans": ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
