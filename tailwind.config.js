/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f2eefb',
          100: '#e5def7',
          200: '#cbbdef',
          300: '#b19ce7',
          400: '#967bdf',
          500: '#7c5ad7',
          600: '#5919c1', // Your primary blue color
          700: '#4714a3',
          800: '#350f85',
          900: '#230a67',
          950: '#120549',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
