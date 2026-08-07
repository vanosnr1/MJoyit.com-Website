/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F16",       // near-black background
        panel: "#131A24",     // raised surface
        panel2: "#1B2430",    // deeper raised surface
        line: "#26313F",      // hairline borders
        fog: "#8A94A3",       // muted text
        paper: "#F2F4F7",     // primary text on dark
        signal: "#4F7CFF",    // primary accent — electric blue
        current: "#22D3AE",   // secondary accent — teal, used sparingly
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "stage-wave": "linear-gradient(90deg, #4F7CFF 0%, #4F7CFF 33%, #22D3AE 66%, #F2F4F7 100%)",
      },
    },
  },
  plugins: [],
};
