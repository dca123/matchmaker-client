import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import UserAvatar from '@/components/UserAvatar';
import { Ticket, TicketProvider } from 'src/contexts/ticketContext';
import { useState } from 'react';
import theme from '../theme/theme';
import Fonts from '../theme/fonts';

function MyApp({ Component }: AppProps): React.ReactElement {
  const [ticket, setTicket] = useState<Ticket>(new Ticket());
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
        <UserAvatar />
        <TicketProvider value={{ ticket, setTicket }}>
          <Component />
        </TicketProvider>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
