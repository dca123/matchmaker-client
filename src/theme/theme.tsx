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
const colors = {
  black: '#121C30',
  blue: '#1D2D50',
  purple: '#52057B',
  pink: '#BC6FF1',
  brand: {
    50: '#bc6ff1',
    100: '#ac61df',
    200: '#9b54cd',
    300: '#8a48ba',
    400: '#783da6',
    500: '#653592',
    600: '#502e7b',
    700: '#3a2963',
    800: '#222448',
    900: '#121c30',
  },
};
const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  components: {
    Progress: {
      parts: ['track', 'filledTrack'],
      baseStyle: {
        track: {
          bgColor: colors.blue,
        },
        filledTrack: {
          bgColor: colors.pink,
        },
      },
    },
  },
});

export default theme;
