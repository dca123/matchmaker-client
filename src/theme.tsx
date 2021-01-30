import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  heading: 'Montserrat',
  body: 'Nunito',
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    black: '#121C30',
    blue: '#1D2D50',
    purple: '#52057B',
    pink: '#BC6FF1',
  },
  fonts,
  breakpoints,
});

export default theme;
