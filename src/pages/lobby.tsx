import { Heading, Flex, Progress } from '@chakra-ui/react';
import withAuth from 'src/hoc/withAuthentication';
import { useRouter } from 'next/router';
import { io } from 'socket.io-client';
import { useState } from 'react';
import { defaultUser, Player } from '@/layouts/TeamCard';
import { TeamCard, PageHeading, Layout } from '../components/CustomComponents';

function Lobby(): React.ReactElement {
  const router = useRouter();
  const socket = io('http://localhost:8080/lobby', {
    auth: {
      playerID: 123,
      lobbyID: 123,
    },
  });
  const [title, setTitle] = useState('default text');
  const [progess, setProgress] = useState(15);
  const [radiantPlayers, setRadiantPlayers] = useState([
    defaultUser,
    defaultUser,
    defaultUser,
    defaultUser,
    defaultUser,
  ]);
  socket.on('title update', (newTitle: string) => {
    setTitle(newTitle);
  });
  socket.on('progress update', (newProgress: number) => {
    setProgress(newProgress);
  });
  socket.on('radiant update', (newRadiant: Player[]) => {
    setRadiantPlayers(newRadiant);
  });
  return (
    <Layout>
      <PageHeading>{title}</PageHeading>
      <Progress
        value={progess}
        size="sm"
        w={['22rem', '43rem']}
        borderRadius="base"
        my={[-24, -16]}
        onClick={() => router.push('/postGame')}
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
  );
}

export default withAuth(Lobby);
