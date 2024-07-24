/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.html", "./layout/**/*.ejs", "./main.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        light: "#FBF2F2",
        DEFAULT: "#AA0601",
        dark: "#650300",
      },
      secondary: "#69F0AE",
      dark: "#000",
      light: "#fff",
    },
    fontSize: {
      sm: ["0.875rem", "1.5"], //14px
      base: ["1rem", "1.5"], //16px
      lg: ["1.25rem", "1.5"], //20px
      xl: ["1.5rem", "1.5"], //24px
      "2xl": ["2.25rem", "1.5"], //36px
      "3xl": ["3rem", "1.5"], //48px
      "4xl": ["4rem", "1.5"], //64px
    },
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
    container: {
      center: true,
      padding: "12px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
