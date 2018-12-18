import Typography from 'typography'
import { theme } from '../theme/globalStyles'

import BG from '../images/waves-pattern.svg'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Abril Fatface', 'serif'],
  bodyFontFamily: ['Oleo Script', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  googleFonts: [
    {
      name: 'Abril+Fatface',
      styles: [400],
    },
    {
      name: 'Oleo+Script',
      styles: [400],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'body': {
      backgroundImage: `url(${ BG })`,
    },
    'a': {
      color: theme.primary,
      textShadow: 'none',
      textDecoration: 'none',
      backgroundImage: 'none',
    },
    p: {
      lineHeight: '45px',
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
