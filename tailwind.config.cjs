/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      'orange': '#fe7512',
      'gray-deep': '#8b919e',
      'black-mid': '#1e252f'
    },
  },
    
  },
  plugins: [],
}
