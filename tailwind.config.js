/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px", // Extra small devices (phones)
      md: "768px", // Medium devices (tablet)
      lg: "1024px", // Large devices (small desktops)
      xl: "1280px", // Extra large devices (large desktops)
      "2xl": "1440px", // 2x Extra large devices (larger screens)
    },
    container: {
      center: true, // Center container by default
      padding: {
        DEFAULT: "1rem", // Padding default
        sm: "1.5rem", // Padding for small screens
        md: "2rem", // Padding for medium screens
        lg: "2.5rem", // Padding for large screens
        xl: "6rem", // Padding for extra large screens
      },
    },

    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      changaOne: ["Changa One", "cursive"],
      roboto: ["Roboto", "sans-serif"],
    },

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.815rem",
      "7xl": "4.6rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      backgroundImage: {
        heroBackground: "url('./public/img/hero-background.png')",
        formBackground: "url('./public/img/form-bg.png')",
      },
      transitionProperty: {
        width: "width",
      },

      transitionTimingFunction: {
        "in-out-cubic": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
    },
  },
  plugins: [],
};
