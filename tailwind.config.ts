/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#12939a',
        'secondary-color': '#f58220',
        'accent-color': '#e2e2e2',
      },
      fontFamily: {
        'body': ['Poppins', 'sans-serif'],
        'heading': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': '14px',
        'sm': '16px',
        'base': '18px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '36px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};