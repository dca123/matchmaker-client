import { Heading, Flex, Progress } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { TeamCard, PageHeading, Layout } from '../components/CustomComponents';

export default function Lobby() {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading> Starting Game </PageHeading>
      <Progress
        value={5}
        size="sm"
        w="85%"
        borderRadius="base"
        my={-16}
        onClick={() => router.push('/postGame')}
      />
      <Flex w="100%" justifyContent="space-around" wrap="wrap">
        <TeamCard teamName="Radiant" />
        <TeamCard teamName="Dire" />
      </Flex>
      <Heading fontSize="sm" color="white" fontWeight="300">
        Type !ready in lobby chat
      </Heading>
    </Layout>
  );
}
