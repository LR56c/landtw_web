/** @type {import('tailwindcss').Config} */
const defaultTheme = require( 'tailwindcss/defaultTheme' )

module.exports = {
  content : [ "./src/**/*.{js,ts,jsx,tsx}" ],
  theme   : {
    screens: {
      xxs: "320px",
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend : {
      lineClamp: {
        7 : '7',
        8 : '8',
        9 : '9',
        10: '10',
      }
    }
  },
  variants: {
    lineClamp: [ 'responsive', 'hover' ]
  },
  plugins : [
    require( '@tailwindcss/line-clamp' ),
    require( "daisyui" )
  ],
};
