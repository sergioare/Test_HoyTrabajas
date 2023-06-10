/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#E10101',
        header:'#020302',
        body:'#16161A',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

