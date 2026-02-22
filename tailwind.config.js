/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        peach: '#ffd7c4',
        mint: '#c9f7e7',
        butter: '#fff2b0',
        sky: '#d6e8ff'
      },
      boxShadow: {
        glow: '0 20px 45px -15px rgba(255, 160, 160, 0.35)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
};