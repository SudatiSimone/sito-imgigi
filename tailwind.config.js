/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B981',     // Verde smeraldo
        accent: '#06b6d4',      // Ciano
        background: '#0F172A',  // Nero blu
        foreground: '#FFFFFF',  // Testo chiaro
        muted: '#94A3B8',       // Grigio testo
      },
    },
  },
  plugins: [],
}
