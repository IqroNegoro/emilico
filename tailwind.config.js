/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      animation: {
        'floating': 'floating 5s ease-in-out infinite'
      },
      keyframes: {
        'floating': {
          '0%': {trasform: 'translateY(0)'},
          '50%': {transform: 'translateY(-20px)'},
          '100%': {trasform: 'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}

