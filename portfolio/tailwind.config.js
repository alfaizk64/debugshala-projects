/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        'Roboto': [ "Roboto"," sans-serif"],
        'Poppins': ["Poppins", "sans-serif"],
        'Inter': ["Inter", "sans-serif"],
        'Open-Sans':["Open Sans", "sans-serif"],
        'Montserrat':["Montserrat", "sans-serif"],
        
      
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}