/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        engageprimary: '#7D1874',
        engagecard : '#BA73F24D',
        engagerose : '#EAD5FB38',
        engageborder : '#760F81',
        

      },
      fontFamily: {
        poppins : ['Poppins'],
        mont : ['Montserrat']
      }
    },
  },
  plugins: [],
}
