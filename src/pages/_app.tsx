import { ChakraProvider, Flex } from '@chakra-ui/react';

import { AppProps } from 'next/app';
import theme from '../theme/theme';
import Fonts from '../theme/fonts';

function MyApp({ Component }: AppProps): React.ReactElement {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Flex
        minH="100vh"
        w="100hh"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
      >
        <Component />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
