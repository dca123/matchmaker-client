import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import UserAvatar from '@/components/UserAvatar';
import {
  emptyTicket,
  Ticket,
  TicketProvider,
} from 'src/contexts/ticketContext';
import { useState } from 'react';
import theme from '../theme/theme';
import Fonts from '../theme/fonts';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const [ticket, setTicket] = useState<Ticket>(emptyTicket);
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
          <TicketProvider value={{ ticket, setTicket }}>
            <Component />
          </TicketProvider>
        </Provider>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
