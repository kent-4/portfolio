/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        surfaceElevated: "var(--color-surface-elevated)",
        ink: "var(--color-ink)",
        inkSoft: "var(--color-ink-soft)",
        inkFaint: "var(--color-ink-faint)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        line: "var(--color-line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
