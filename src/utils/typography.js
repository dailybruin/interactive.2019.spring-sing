import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400'],
    },
    {
      name: 'Futura',
      styles: ['400'],
    },
    {
      name: 'Bebas Neue',
      styles: ['400'],
    },
    {
      name: 'Lato',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Georgia', 'serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],
})

export default typography
