/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F7F5",
        paperDim: "#EDEFEB",
        ink: "#12141C",
        inkSoft: "#4B5160",
        inkFaint: "#8A8F98",
        teal: "#0E7C66",
        tealSoft: "#E4F2EE",
        amber: "#C08A2E",
        amberSoft: "#F5EBD8",
        line: "#DDE2DE",
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
