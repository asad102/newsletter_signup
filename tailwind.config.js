/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.js",
  ],
  theme: {
    fontFamily : {
      roboto : ['Roboto', 'sans-serif'],
    },
    colors : {
      White : '#FFFFFF',
      Grey : '#CCC',
      Navy : {
        pale : '#36384D',
        dark : '#242742',
      },
      Vermellion : '#FF6155',
    },
    backgroundImage : {
      Gradient1 : 'linear-gradient(to bottom, #FF6A3A 0%, #FF527B 100%)',
    }, 
    boxShadow : {
      'box-1': '0px 8px 0px 0px rgba(0, 0, 0, 1)',
      'box-2': '0px 24px 32px 0px rgba(0, 0, 0, 1)',
    },
    extend: {
      fontSize :  {
        'Heading' : ['56px', {
          lineHeight : '100%',
          letterSpacing : '0px',
          fontWeight : 'bold',
        }],
        'Body' : ['16px', {
          lineHeight : '150%',
          letterSpacing : '0px',
          fontWeight : 'normal',
        }],
        'Bodybold' : ['16px', {
          lineHeight : '150%',
          letterSpacing : '0px',
          fontWeight : 'bold',
        }],
        'Bodysmall' : ['12px', {
          lineHeight : '150%',
          letterSpacing : '0px',
          fontWeight : 'bold',
        }],
      },
      borderRadius : {
        '36' : '36px',
      },
      spacing : {
        928 : '928px',
        641 : '641px',
        376 : '376px',

        504 : '504px',
        520 : '520px',
        376 : '376px',
        446 : '446px',
        400 : '400px',
        593 : '593px',
      },
    },
  },
  plugins: [],
}

