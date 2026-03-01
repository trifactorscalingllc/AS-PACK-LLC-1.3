/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        text: "var(--color-text)",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
