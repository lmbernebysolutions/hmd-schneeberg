import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // ─── FARBEN (Corporate Identity) ────────────────────────
      colors: {
        hmd: {
          "dark-red": "#bb2624",
          "light-red": "#e43e22",
          grey: "#686968",
        },
        surface: {
          DEFAULT: "#f8fafc", // Concrete Grey
          dark: "#1a1a1a", // Anthrazit
        },
      },

      // ─── TYPOGRAFIE ─────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-archivo)", ...fontFamily.sans],
        body: ["var(--font-dm-sans)", ...fontFamily.sans],
        technical: ["var(--font-jetbrains-mono)", ...fontFamily.mono],
      },
      fontSize: {
        // Custom Scale für "Industrial Precision"
        "display-xl": [
          "clamp(3rem, 8vw, 6rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 5vw, 4rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.75rem, 3vw, 2.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        "body-lg": ["1.25rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        label: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
      },

      // ─── SPACING (Großzügig) ────────────────────────────────
      spacing: {
        section: "clamp(5rem, 12vh, 8rem)", // Abstand zwischen Sektionen
        "section-sm": "clamp(3rem, 8vh, 5rem)",
      },

      // ─── ANIMATIONEN ───────────────────────────────────────
      animation: {
        "foundation-draw": "foundationDraw 0.8s ease-out forwards",
        "snap-in": "snapIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        counter: "counter 2s ease-out forwards",
      },
      keyframes: {
        foundationDraw: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        snapIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "70%": { opacity: "1", transform: "translateY(-3px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // ─── BORDER RADIUS (Minimal, scharf) ───────────────────
      borderRadius: {
        hmd: "2px", // Fast-scharfe Kanten, nur minimales Rounding
      },
    },
  },
  plugins: [],
};

export default config;
