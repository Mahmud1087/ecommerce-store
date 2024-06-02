/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato',
        dancing_scipt: 'Dancing Script',
        oswald: 'Oswald',
      },
    },
  },
  plugins: [],
};
