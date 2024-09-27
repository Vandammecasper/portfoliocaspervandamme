/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      jost: ['Jost', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      screens:{
        '3xl' : '1920px',
        maxlg : {max: '1023.5px'}
      },
      rotate:{
        270: '270deg'
      },
      padding: {
        100: '40rem'
      },
      width: {
        97: '29rem',
        98: '38rem',
        100: '50rem'
      },
      gap: {
        100: '36rem'
      },
    },
  },
  plugins: [],
}
