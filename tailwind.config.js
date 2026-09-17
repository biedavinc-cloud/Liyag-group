/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        secondary: {
          50: '#eef6f5',
          100: '#d7e9e7',
          200: '#b0d3cf',
          300: '#7fb6b0',
          400: '#4c9990',
          500: '#2f7d74',
          600: '#1f5f5b',
          700: '#1a4d4a',
          800: '#163e3c',
          900: '#0f2b2a',
        },
        accent: {
          50: '#fdf6e3',
          100: '#faedc4',
          200: '#f3da8a',
          300: '#ecc659',
          400: '#e0ac2f',
          500: '#D4A017',
          600: '#B4860F',
          700: '#8F6A0C',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out',
        'gold-sheen': 'gold-sheen 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'scroll-indicator': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(6px)', opacity: '0.4' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,160,23,0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(212,160,23,0)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gold-sheen': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};
