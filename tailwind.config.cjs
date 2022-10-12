/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', /* todos arquivos que terminem com .tsx */
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
