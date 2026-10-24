import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2A6B",
        azure: "#1E6FD9",
        sky: "#8EC5FF",
        aqua: "#2BB3C0",
        offwhite: "#F5F9FF",
        gold: "#D4A94A",
        charcoal: "#1F2933",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(30, 111, 217, 0.55)",
      },
    },
  },
};

export default config;
