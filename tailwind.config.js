/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      button: {
        display: 'flex',
        alignItems: 'center'
      }
    }
  },
  plugins: []
}
