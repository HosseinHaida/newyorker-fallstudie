/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(63, 37, 89)",
      },
    },
  },
  plugins: [],
}
