/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#76A8D8BF",
        secondary: "#5E92C4",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  },
};
