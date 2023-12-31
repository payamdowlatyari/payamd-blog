/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  images: {
    domains: ['storage.googleapis.com'],
  },
  plugins: [require('@tailwindcss/typography'), require("tw-elements-react/dist/plugin.cjs")],
}
