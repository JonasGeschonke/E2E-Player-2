import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        text: '#f2ece8',
        background: '#0e0906',
        background2: '#2B1C13',
        primary: '#d5ac90',
        secondary: '#ff6600',
        accent: '#ec9155',
        'accent-green': 'rgb(34,112,30)'
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        medium: '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
        pressed: '0 2px 5px rgba(0, 0, 0, 0.2)'
      },
      keyframes: {
        zoomin: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        zoomin: 'zoomin 0.8s ease-in-out forwards'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-filters'),
  ],
};
