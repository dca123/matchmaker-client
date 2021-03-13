import { Heading, Flex, Progress } from '@chakra-ui/react';
import withAuth from 'src/hoc/withAuthentication';
import { useRouter } from 'next/router';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { defaultPlayerArray, Player } from '@/layouts/TeamCard';
import { useTicket } from 'src/contexts/ticketContext';
import endpointsConfig from 'endpoints.config';
import { TeamCard, PageHeading, Layout } from '../components/CustomComponents';

function Lobby(): React.ReactElement {
  const router = useRouter();

  const [title, setTitle] = useState('Waiting on the Ancients');
  const [progess, setProgress] = useState(0);
  const [lobbyError, setLobbyError] = useState(false);
  const [radiantPlayers, setRadiantPlayers] = useState(defaultPlayerArray);
  const [direPlayers, setDirePlayers] = useState(defaultPlayerArray);
  const { ticket } = useTicket();

  useEffect(() => {
    if (!ticket.ticketID) {
      ticket.ticketID = sessionStorage.getItem('ticketID') ?? '';
    }

    const socket = io(`${endpointsConfig.NEXT_PUBLIC_API_RMM}/lobby`, {
      auth: {
        ticket,
      },
    });
    socket.on('playerList', (players: Player[]) => {
      setRadiantPlayers(players.slice(0, 5));
    });
    socket.on('lobbyState', (newProgress: number, newTitle: string) => {
      setTitle(newTitle);
      setProgress(newProgress);
    });
    socket.on(
      'lobbyTimeout',
      (newProgress: number, newTitle: string, newLobbyError: boolean) => {
        setTitle(newTitle);
        setProgress(newProgress);
        if (newLobbyError) {
          setLobbyError(newLobbyError);
        }
      }
    );
    socket.on(
      'waitingForPlayers',
      (newProgress: number, newTitle: string, players: Player[]) => {
        setTitle(newTitle);
        setProgress(newProgress);
        setRadiantPlayers(players.slice(0, 5));
        setDirePlayers(players.slice(5, 10));
      }
    );

    return () => {
      // Disconnect socket on leaving page. Avoids memory leaks on reloads
      socket.disconnect();
    };
  }, [ticket]);
  return (
    <>
      <Layout>
        <PageHeading>{title}</PageHeading>
        <Progress
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
          <TeamCard teamName="Dire" playerArray={direPlayers} />
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
