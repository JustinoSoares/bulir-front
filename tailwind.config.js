import { head, header } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', "system-ui", "sans-serif"],
        heading: ['Poppins', "system-ui", "sans-serif"],

      },
    },
  },
  plugins: [],
};
