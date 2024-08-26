/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#EBF0F9',
          200: '#E5E5E5',
          300: '#525560',
          400: '#1E1E1E',
        },
        primary: {
          DEFAULT: '#c43521',
          50: '#fef3f2',
          100: '#fee5e2',
          200: '#fdd1cb',
          300: '#fbb0a6',
          500: '#ec5b47',
          700: '#C43521',
        },
        secondary: {
          default: '#35b0fc',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        hero: "linear-gradient(90deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,.4) 100%), url('/assets/images/hero-image.webp')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: '4px',
      },
      animation: {
        moveUp: 'moveUp 1.4s ease forwards',
        appear: 'appear 1s 1s forwards',
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(5%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        appear: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
