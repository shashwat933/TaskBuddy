/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mine': '#ADFF45',
        'mine2': '#adff45',
        'formPlaceholder': '#808080',
      },
      width: {
        '128': '50rem',
      },
      screens: {
        'md2': '810px',
        'sm2': '400px',
      },
    },
  },
  plugins: [],
}

