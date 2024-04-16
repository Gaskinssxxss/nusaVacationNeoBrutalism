/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'sunny': '#EDEED2',
        'black': '#000000',
        'sun': '#F56232',
        'maryjane': '#AAE73D',
        'ocean': '#186F65'
      },
      fontFamily: {
        'Karantina': 'Karantina',
        'saira': 'Saira Condensed'
      },
      margin: {
        '85': '480px',
      },
      width: {
        '90': '20rem',
        '91': '21rem',
        '92': '22.5rem',
        '93': '29.5rem',
        '95': '28rem',
        '98': '34rem',
        '100': '32rem',
        '105': '45rem',
        '110': '50rem',
        '120': '60rem'
      },
      height: {
        '100': '32rem',
        '105': '45rem',
        '110': '50rem',
        '102': '27rem',
        '110': '31rem',
      },
      padding: {
        '26': '6.27rem',
        '85': '22rem',
        '95': '24rem',
        '100': '28rem',
        '102': '35rem',
        '105': '30rem',
        '110': '50rem'
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1280px) { ... }

      '3xl': '1540px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('@vueform/slider/tailwind'),
  ],
}

