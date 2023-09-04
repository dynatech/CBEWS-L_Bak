const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  safelist: [
    'bg-alert-0',
    'bg-alert-1',
    'bg-alert-2',
    'bg-alert-3'
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#F8991D',
        'primary-blue': '#16526D',
        'primary-blue-100': '#122d3a', 
        'primary-maroon': '#991B1E',
        'primary-green': '#006600',
        'primary-red': '#991B1E',
        'alert-0': '#c5e0b4',
        'alert-1': '#FCEE27' ,
        'alert-2': '#F8991D',
        'alert-3': '#FE0000'
      }
    },
  },
  darkMode: 'media',
  plugins: [
    require('flowbite/plugin')
  ],
}