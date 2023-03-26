/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1580px": "1580px",
      },
      screens: {
        md481: "481px",
      },
    },
  },
  plugins: [],
};
