/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', /* todos arquivos que terminem com .tsx */
  ],
  theme: {
    extend: {

      fontSize:{
        xs:14,
        sm:16,
        md:18,
        lg:20,
        xl:24,
        '2xl':32,
      },

      colors:{
        'black':'#000000',
        'white':'#ffffff',

        gray: {
          900 :'#121214',
          800 :'#202024',
          400 :'#7C7C8A',
          200 :'#C4C4CC',
        },

        cyan: {
          500 :'#81D8F7',
          300 :'#9BE1FB',
        }        
      },

      fontFamily: {
        sans: 'Inter, sans-serif'
      },

    },
  },
  plugins: [],
}
