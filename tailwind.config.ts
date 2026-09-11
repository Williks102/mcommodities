import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#16382D",
        cacao: "#6B432C",
        cream: "#F5F0E7",
        sand: "#E6D8C2",
        gold: "#B88A45"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(22,56,45,.12)"
      }
    }
  },
  plugins: []
};

export default config;