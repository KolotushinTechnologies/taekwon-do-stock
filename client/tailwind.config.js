/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "collage-bg": "url('/public/collage-585x391.webp')",
      },
      colors: {
        "dark-bg": "rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
