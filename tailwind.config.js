import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'text': '#f2ece8',
        'background': '#0e0906',
        'background2': '#2B1C13',
        'primary': '#d5ac90',
        'secondary': '#ff6600',
        'accent': '#ec9155',
        'accent-green': 'rgb(34,112,30)'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};