/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#a3e635',
          500: '#84CC16',
          600: '#65A30D',
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(132, 204, 22, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(132, 204, 22, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}