/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--c-ink) / <alpha-value>)",         // page background
        panel: "rgb(var(--c-panel) / <alpha-value>)",     // raised surface
        panel2: "rgb(var(--c-panel2) / <alpha-value>)",   // deeper raised surface
        line: "rgb(var(--c-line) / <alpha-value>)",       // hairline borders
        fog: "rgb(var(--c-fog) / <alpha-value>)",         // muted text
        paper: "rgb(var(--c-paper) / <alpha-value>)",     // primary text
        signal: "rgb(var(--c-signal) / <alpha-value>)",   // primary accent — blue
        current: "rgb(var(--c-current) / <alpha-value>)", // secondary accent — teal
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "stage-wave":
          "linear-gradient(90deg, rgb(var(--c-signal)) 0%, rgb(var(--c-signal)) 33%, rgb(var(--c-current)) 66%, rgb(var(--c-paper)) 100%)",
      },
    },
  },
  plugins: [],
};
