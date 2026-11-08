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
      // Design system motion: one decelerating curve for every transition.
      // Overriding DEFAULT/in/out/in-out means existing `transition`,
      // `ease-out` etc. utilities all resolve to it without touching markup.
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.22, 1, 0.36, 1)",
        in: "cubic-bezier(0.22, 1, 0.36, 1)",
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out": "cubic-bezier(0.22, 1, 0.36, 1)",
        base: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      // Shadows tinted toward the brand graphite instead of pure black, one
      // light source (straight down).
      boxShadow: {
        sm: "0 1px 2px 0 rgb(19 26 30 / 0.06)",
        DEFAULT: "0 1px 3px 0 rgb(19 26 30 / 0.08), 0 1px 2px -1px rgb(19 26 30 / 0.06)",
        md: "0 4px 6px -1px rgb(19 26 30 / 0.08), 0 2px 4px -2px rgb(19 26 30 / 0.06)",
        lg: "0 10px 15px -3px rgb(19 26 30 / 0.08), 0 4px 6px -4px rgb(19 26 30 / 0.06)",
        xl: "0 20px 25px -5px rgb(19 26 30 / 0.09), 0 8px 10px -6px rgb(19 26 30 / 0.06)",
        "2xl": "0 25px 50px -12px rgb(19 26 30 / 0.2)",
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
