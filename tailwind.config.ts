import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0A0A0A",
        surfaceBorder: "rgba(255, 255, 255, 0.08)",
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern-sm": "linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px)",
        "grid-pattern-lg": "linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "24px 24px",
        "grid-lg": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
