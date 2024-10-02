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
    // screens:{
    //   "2xl": "1537px"
    // },
    extend: {
      screens:{
        '3xl' : '1920px',
        maxlg : {max: '1023.5px'}
      },
      rotate:{
        270: '270deg'
      },
      padding: {
        100: '40rem',
        110: '50rem'
      },
      width: {
        97: '29rem',
        98: '38rem',
        100: '50rem',
        110: '56rem',
      },
      gap: {
        100: '36rem'
      },
      scale: {
        10: '0.1',
        12: '0.12',
        15: '0.15',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        200: '2',
        300: '3',
        400: '4',
        500: '5',
        800: '8',
        900: '9',
        1000: '10',
      },
      borderWidth: {
        1: '1px',
      },
      translate: {
        30: '7.5rem'
      },
      margin: {
        13: '3.15rem',
        13.5: '3.4rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.3rem',
        25: '6.25rem',
        27: '6.75rem',
        37: '9.25rem',
        46: '11.5rem',
      },
      fontSize:{
        xxs: '0.575rem'
      }
    },
  },
  plugins: [],
}
