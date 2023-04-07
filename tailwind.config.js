module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'main': '#E92051',
        'land2': '#FFF5F5',
        'land1': '#F5F9FF',
        'white': '#FFFFFF',
        'footer': '#201A2D',
        'black': '#000000',
        'green': '#36D83C',
        'gradient': '#030045AF',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/hero.svg')",
        'ad': "url('/assets/ad.png')",
      },
      padding: {
        '1/2': '20%',
        '1/3': '5%',
        full: '100%',
      },
      fontFamily: {
        'html': ['Poppins']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
