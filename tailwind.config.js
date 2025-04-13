/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          glitch: {
            '0%': { transform: 'translate(0)' },
            '20%': { transform: 'translate(-1px, 1px)' },
            '40%': { transform: 'translate(-1px, -1px)' },
            '60%': { transform: 'translate(1px, 1px)' },
            '80%': { transform: 'translate(1px, -1px)' },
            '100%': { transform: 'translate(0)' },
          },
        },
        animation: {
          glitch: 'glitch 0.8s infinite',
        },
      },
    },
    plugins: [],
  }
  