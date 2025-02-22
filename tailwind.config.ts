import { fontFamily } from "tailwindcss/defaultTheme";
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1400px",
        },
      },

      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
      },
      colors: {
        background: "#0A0A0B",
        foreground: "#FFFFFF",
        grey: {
          DEFAULT: "#F5F5F7",
          main: "#F5F1F1",
          dark: "#CBCBCB",
          darker: "#707070",
        },
        primary: {
          DEFAULT: "#171818",
          main: "#171818",
        },
        secondary: {
          DEFAULT: "#F5F5F7",
          main: "#F5F5F7",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
