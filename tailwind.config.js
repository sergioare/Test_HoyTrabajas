/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E10101',
        header: '#020302',
        body: '#16161A',
      },
      screens: {
        'mobile': {
          max: '768px'
        }
      },
      transitionProperty: {
        margin: 'margin',
        opacity: 'opacity',
        transform: 'transform'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};