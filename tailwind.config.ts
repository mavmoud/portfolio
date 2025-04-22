import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      keyframes: {
        beat: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.96)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        background: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(10px, 0px) scale(0.9)",
          },
          "66%": {
            transform: "translate(-30px, 0px)scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        background: "background 10s ease-in-out infinite",
        beat: "beat 3s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#939393",
        silver: "#BBBBBB",
      },
      fontFamily: {
        switzer: ["var(--font-switzer)"],
        gambarino: ["var(--font-gambarino)", "serif"],
        montserrat: ["var(--font-montserrat)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
