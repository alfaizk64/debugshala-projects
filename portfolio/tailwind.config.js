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
      },
      animation:{
        spin_slow:'spin 6s linear infinite'
      },
      colors:{
               lightHover:"#fcf4ff",      
               darkHover :"#2a004a",
               darkTheme: "#11001F"
      },
      boxShadow:{
            'black':'4px 4px 0 #000',
            'white':'4px 4px 0 #fff'
      }
    },
  },
  darkMode:'selector',
  plugins: [],
}