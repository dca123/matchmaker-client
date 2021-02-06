import { ChakraProvider, Flex } from '@chakra-ui/react';

import theme from '../theme/theme';
import Fonts from '../theme/fonts';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Flex
        minH="100vh"
        minW="100%"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
      >
        <Component {...pageProps} mt={-16} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
