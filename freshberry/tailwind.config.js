/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          }
        }
      },
      animation: {
        'fade-slide-up': 'fade-slide-up 0.6s ease-out forwards'
      }
    },
  },
  plugins: [],
}