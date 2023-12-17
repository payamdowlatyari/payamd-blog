/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  images: {
    domains: ['storage.googleapis.com'],
  },
  plugins: [require('@tailwindcss/typography')],
}
