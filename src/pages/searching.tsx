import { useToast, Box } from '@chakra-ui/react';
import withAuth from '@/hoc/withAuthentication';
import { useRouter } from 'next/router';
import {
  GradientCard,
  Button,
  PageHeading,
  Layout,
  Image,
} from '@/components/CustomComponents';
import { Ticket, useTicket } from '@/contexts/ticketContext';
import { io } from 'socket.io-client';
import endpointsConfig from 'endpoints.config';
import { useEffect } from 'react';

function Searching(): React.ReactElement {
  const router = useRouter();
  const { ticket, setTicket } = useTicket();
  const toast = useToast();

  useEffect(() => {
    if (!ticket.ticketID) {
      const ticketID = sessionStorage.getItem('ticketID') ?? undefined;
      setTicket(new Ticket(ticketID));
    }

    const socket = io(`${endpointsConfig.NEXT_PUBLIC_API_RMM}/searching`, {
      auth: {
        ticket,
      },
    });
    socket.on('lobbyFound', () => {
      toast({
        title: 'Game Found !',
        description: 'Please wait till we transition you to a lobby',
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        router.push('/lobby');
        socket.disconnect();
      }, 1000);
    });

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [router, setTicket, ticket, toast]);
  return (
    <Layout>
      <PageHeading>Finding Game</PageHeading>
      <GradientCard w={[64, 80]} h={[64, 80]}>
        <Box ml={8}>
          <Image
            alt="Juggernaut Running"
            src="/searchJug.gif"
            width={['250']}
            height={['250']}
          />
        </Box>
      </GradientCard>
      <Button onClick={() => router.push('/lobby')}>Cancel</Button>
    </Layout>
  );
}

export default withAuth(Searching);
