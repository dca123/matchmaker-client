import { Heading, Flex, Progress } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { TeamCard, PageHeading, Layout } from '../components/CustomComponents';

export default function Lobby(): React.ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading> Starting Game </PageHeading>
      <Progress
        value={5}
        size="sm"
        w={['22rem', '43rem']}
        borderRadius="base"
        my={[-24, -16]}
        onClick={() => router.push('/postGame')}
      />
      <Flex w={['20rem', '36rem']} justifyContent="space-around">
        <TeamCard teamName="Radiant" />
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
