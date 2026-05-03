import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Mobile-first responsive breakpoints
      'xs': '320px',   // Extra small devices
      'sm': '481px',   // Mobile to Tablet transition
      'md': '769px',   // Tablet to Laptop transition
      'lg': '1025px',  // Desktop and above
      'xl': '1280px',  // Large desktop
      '2xl': '1536px', // Extra large desktop
    },
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        border: "var(--color-border)",
        body: "var(--color-body)",
        muted: "var(--color-muted)",
        inverse: "var(--color-inverse)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        md: "12px",
        lg: "14px",
        xl: "16px",
      },
      boxShadow: {
        soft: "var(--lt-shadow-sm)",
        medium: "var(--lt-shadow-md)",
        strong: "var(--lt-shadow-lg)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      fontSize: {
        // Responsive fluid typography using clamp
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.95rem + 1.5vw, 3rem)',
        'fluid-5xl': 'clamp(2.5rem, 2rem + 2.5vw, 3.75rem)',
        'fluid-6xl': 'clamp(3rem, 2.25rem + 3.75vw, 4.5rem)',
      },
    },
  },
};

export default config;
