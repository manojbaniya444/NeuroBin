/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'scanning': 'scanning 2s infinite',
      },
      keyframes: {
        scanning: {
          '0%': { top: '0' },
          '50%': { top: '88%' },
          '100%': { top: '0' },
        },
      },
    },
  },
  plugins: [],
};
