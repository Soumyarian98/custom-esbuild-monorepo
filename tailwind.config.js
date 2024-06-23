/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/client/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {},
  },
  plugins: [],
};
