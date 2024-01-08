/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'mShadow': '0px 5px 5px 6px rgba(112,125,32,0.3)',
        'inputShadow': 'inset 0px 0px 2px 2px rgba(1,200,10,0.5)',
      }
    },
  },
  plugins: [],
}

