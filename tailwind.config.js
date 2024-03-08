/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}"],
  plugins: [require("daisyui")], // DaisyUI should be included here
  theme: {
    extend: {},
  },
}
