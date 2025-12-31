/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'],
      },
      colors: {
        aurora: {
          cyan: '#06b6d4',
          magenta: '#ec4899',
          violet: '#8b5cf6',
          indigo: '#6366f1',
        }
      },
      animation: {
        'Aurora': 'aurora 20s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
