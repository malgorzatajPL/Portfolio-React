export const theme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
      blue: '#100667',
      pink: '#AA14B6',
      grey: '#C7C5C7',
    },
    primary: {
      main: '#EB3123',
      hover: '# ',
      contrastText: '#fff',
      background: '#f7f7f7',
    },
    secondary: {
      main: '#54b835',
      contrastText: '#ffffff',
    },
  },
  fontFamily: {
    main: 'Raleway',
  },
};
const fontSizeBase = 16;
export const fontSize = (sizeInPx) =>
  `${(sizeInPx / fontSizeBase).toFixed(2)}rem`;
