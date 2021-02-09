import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import theme from '../theme/theme';
import Fonts from '../theme/fonts';
import UserAvatar from '../components/UserAvatar';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
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
        <Provider session={pageProps.session}>
          <UserAvatar />
          <Component />
        </Provider>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
