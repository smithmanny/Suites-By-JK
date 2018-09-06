import Typography from 'typography';

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
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({}),
});

export default typography;
