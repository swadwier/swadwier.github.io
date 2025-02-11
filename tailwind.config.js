/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
      "./**/*.html",
      // "./**/*.js" ],
  ],
  darkMode: 'class',
  theme: 
  {
    container: {
      padding: '2rem',
      center:true,
    },
    extend: {
      fontSize: {
        'xxs': ['10px', '12px'],
        '3xs': ['8px', '8px'],
    },
    
    },
  
  },
  plugins: [],
}

