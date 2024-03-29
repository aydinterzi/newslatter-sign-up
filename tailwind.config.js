/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto, sans-serif"],
    },
    extend: {
      colors: {
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
        tomato: "hsl(4, 100%, 67%)",
      },
      screens: {
        sm: "375px",
        md: "1440px",
      },
    },
  },
  plugins: [],
};
