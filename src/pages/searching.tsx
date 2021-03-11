import { useToast, Box } from '@chakra-ui/react';
import withAuth from 'src/hoc/withAuthentication';
import { useRouter } from 'next/router';
import {
  GradientCard,
  Button,
  PageHeading,
  Layout,
  Image,
} from '@/components/CustomComponents';
import { useTicket } from 'src/contexts/ticketContext';
import { io } from 'socket.io-client';
import endpointsConfig from 'endpoints.config';

function RoleSelection(): React.ReactElement {
  const router = useRouter();
  const { ticket } = useTicket();
  const toast = useToast();

  const ticketID = sessionStorage.getItem('ticketID');

  let auth = {
    ticket,
  };
  if (ticketID) {
    auth = {
      ticket: {
        ticketID,
      },
    };
  }
  const socket = io(`${endpointsConfig.NEXT_PUBLIC_API_RMM}/searching`, {
    auth,
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

export default withAuth(RoleSelection);
