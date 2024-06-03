/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato',
        dancing_scipt: 'Dancing Script',
        oswald: 'Oswald',
      },
      colors: {
        background: 'rgba(var(--background))',
        nav_bg: 'rgba(var(--nav_bg))',
        color: 'rgba(var(--color))',
      },
    },
  },
  plugins: [],
};
