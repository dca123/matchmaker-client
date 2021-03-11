import { Heading, Flex, Progress } from '@chakra-ui/react';
import withAuth from 'src/hoc/withAuthentication';
import { useRouter } from 'next/router';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { defaultUser, Player } from '@/layouts/TeamCard';
import { useTicket } from 'src/contexts/ticketContext';
import endpointsConfig from 'endpoints.config';
import { TeamCard, PageHeading, Layout } from '../components/CustomComponents';

function Lobby(): React.ReactElement {
  const router = useRouter();
  const { ticket } = useTicket();
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
  const socket = io(`${endpointsConfig.NEXT_PUBLIC_API_RMM}/lobby`, {
    auth,
  });
  const [title, setTitle] = useState('Waiting on the Ancients');
  const [progess, setProgress] = useState(10);
  const [lobbyError, setLobbyError] = useState(false);
  const [radiantPlayers, setRadiantPlayers] = useState([
    defaultUser,
    defaultUser,
    defaultUser,
    defaultUser,
    defaultUser,
  ]);
  socket.on(
    'lobbyState',
    (newProgress: number, newTitle: string, newLobbyError?: boolean) => {
      setTitle(newTitle);
      setProgress(newProgress);
      if (newLobbyError) {
        setLobbyError(newLobbyError);
      }
    }
  );
  socket.on('radiant update', (newRadiant: Player[]) => {
    setRadiantPlayers(newRadiant);
  });

  useEffect(() => {
    // Disconnect socket on leaving page. Avoids memory leaks on reloads
    return () => {
      socket.disconnect();
    };
  });
  return (
    <>
      <Layout>
        <PageHeading>{title}</PageHeading>
        <Progress
          colorScheme="green"
          value={progess}
          size="sm"
          w={['22rem', '43rem']}
          borderRadius="base"
          my={[-24, -16]}
          onClick={() => router.push('/postGame')}
          isIndeterminate={progess === 0}
          variant={lobbyError ? 'with-error' : ''}
        />
        <Flex w={['20rem', '36rem']} justifyContent="space-around">
          <TeamCard teamName="Radiant" playerArray={radiantPlayers} />
          <TeamCard teamName="Dire" />
        </Flex>
        <Heading
          fontSize={['sm', 'lg']}
          color="white"
          fontWeight="300"
          mt={[-24, -16]}
        >
          Type !ready in lobby chat
        </Heading>
      </Layout>
    </>
  );
}

export default withAuth(Lobby);
