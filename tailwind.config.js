/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
  plugins: [],
}