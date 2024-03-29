import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400'],
    },
    {
      name: 'Oswald',
      styles: ['400'],
    },
    {
      name: 'Brandon Grotesque',
      styles: ['400'],
    },
    {
      name: 'Lato',
      styles: ['400'],
    },
    {
      name: 'Bebas Neue',
      styles: ['400', '900'],
    },
  ],
  headerFontFamily: ['Georgia', 'serif'],
  bodyFontFamily: ['Nunito', 'serif'],
})

export default typography
