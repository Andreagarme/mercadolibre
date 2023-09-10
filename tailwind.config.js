/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          100: "#fdfbd7",
          200: "#fbf7af",
          300: "#faf286",
          400: "#f8ee5e",
          500: "#f6ea36",
          600: "#c5bb2b",
          700: "#c5bb2b",
          800: "#c5bb2b",
          900: "#c5bb2b",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
