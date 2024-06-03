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
        search_bg: 'rgba(var(--search_bg))',
        search_color: 'rgba(var(--search_color))',
        accountBtn_bg: 'rgba(var(--accountBtn_bg))',
        accountBtn_color: 'rgba(var(--accountBtn_color))',
        dark_whine: 'rgba(var(--dark_whine))',
      },
    },
  },
  plugins: [],
};
