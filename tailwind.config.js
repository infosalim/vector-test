module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-link": "#c7c7e1",
      },
      backgroundColor: {
        wallet: "#24244a",
        bottomMenu: "#1a1a36",
        indicator: "#6869e7",
      },
      fontFamily: {
        main: "DM Sans",
      },
      height:{
        'height-48': '48px',
        'height-60': '60px',
        'height-80': '80px'
      },
      width:{
        'width-145': '145px'
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
    
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
    
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
    
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
    
        'sm': {'max': '639px'}
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  important: "#root",
  plugins: [],
};
