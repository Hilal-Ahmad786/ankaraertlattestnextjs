import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Blog article bodies and city copy live here as HTML strings and carry
    // Tailwind classes. Without these globs those classes were never generated,
    // so the blog callouts had been rendering unstyled.
    "./src/lib/**/*.{js,ts}",
    "./src/data/**/*.{js,ts,json}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#F7F8F9",
        "surface-container": "#eceef0",
        "surface-container-low": "#f2f4f6",
        "surface-container-high": "#e6e8ea",
        "on-surface": "#131A1E",
        "on-surface-subtle": "#5A5B5C",
        "glass-surface": "rgba(255, 255, 255, 0.44)",
        "glass-border": "rgba(255, 255, 255, 0.66)",
        // Brand — sampled from the logo artwork. Two colours, no others.
        brand: "#131A1E",
        "brand-deep": "#0B1319",
        "brand-raised": "#2A3136",
        accent: "#FC6704",
        "accent-deep": "#C24A02",
        "accent-ink": "#B5470D",
        "accent-tint": "#FFE3D4",
      },
      borderRadius: {
        glass: "1.5rem",
        pill: "9999px",
      },
      boxShadow: {
        glass: "0 18px 50px rgba(25, 28, 30, 0.08)",
        "glass-sm": "0 8px 24px rgba(25, 28, 30, 0.06)",
        glow: "0 18px 42px rgba(252, 103, 4, 0.26)",
      },
      fontFamily: {
        sans: ["var(--font-site)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
