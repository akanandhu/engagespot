/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        engageprimary: "#7D1874",
        engagecard: "#BA73F24D",
        engagerose: "#EAD5FB38",
        engageborder: "#760F81",
      },
      fontFamily: {
        poppins: ["Poppins"],
        mont: ["Montserrat"],
      },
    },

    screens: {
      'sm': '769px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
};
