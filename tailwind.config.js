/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ضروري عشان الـ Dark Mode يشتغل
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}