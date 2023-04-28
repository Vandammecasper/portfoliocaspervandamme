/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        maxlg: { max: '1023.5px' },
      },
      rotate: {
        270: '270deg',
      },
    },
  },
  plugins: [],
};
