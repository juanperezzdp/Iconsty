/** @type {import('tailwindcss').Config} */
import animations from "iconsty-animation";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [animations],
};
