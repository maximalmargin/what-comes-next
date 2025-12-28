/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sun: '#FFD93D',
        sky: '#6BCB77',
        ocean: '#4D96FF',
        coral: '#FF6B6B',
        cloud: '#F8F9FA',
        night: '#2D3436',
      },
      fontFamily: {
        display: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
