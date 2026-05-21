/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          amber: "#f59e0b",
          gold: "#fbbf24",
          rose: "#f472b6",
          plum: "#2a1f3d",
          ink: "#0c0a12",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(245, 158, 11, 0.15)",
        "glow-rose": "0 0 32px rgba(244, 114, 182, 0.2)",
      },
    },
  },
  plugins: [],
};
