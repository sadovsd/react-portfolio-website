/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky1': '#0072E5',
        'sky2': '#F0F7FF',
        'black1': '#1D1D1D',
        'white1': '#F3F6F9',
        'orange1': '#FF4800',
        'orangebg1': '#FFFDF7',
        'bluebg2': '#EBF6FF',
        'bluebg3': '#B4D7FF',
        'bluebg4': '#D0EFFF',
        'bluebg5': '#C2E0FF',
        'bluebg6': '#E4F1FF',
        'materialUI': '#3a3c3e',
        'linkedIn': '#0a66c2'
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
    screens: {
      xs: {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      ssm: '320px',
      // => @media (min-width: 320px) { ... }
      msm: '375px',
      // => @media (min-width: 375px) { ... }
      lsm: '425px',
      // => @media (min-width: 425px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px'
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: []
};
