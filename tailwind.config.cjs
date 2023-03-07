/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        7: '7',
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
