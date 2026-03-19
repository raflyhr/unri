/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", /* sky-500 */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif', 'Poppins'],
      },
    },
  },
  plugins: [],
}
