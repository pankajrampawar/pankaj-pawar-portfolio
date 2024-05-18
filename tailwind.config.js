/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBG": "#000000",
        "theme": "#FFBC3B",
        "skill" : "rgba(255, 255, 255, 0.27)"
      },
    },
  },
  plugins: [],
};
