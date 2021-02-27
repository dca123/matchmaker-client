import { Heading, Spinner } from '@chakra-ui/react';
import withAuth from '@/containers/withAuthentication';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import {
  Button,
  HeroBar,
  Layout,
  PageHeading,
} from '../components/CustomComponents';

type postGameData = {
  radiantVictory: boolean;
  radiantHeroes: [string, string, string, string, string];
  direHeroes: [string, string, string, string, string];
};
async function fetcher(
  input: RequestInfo,
  init?: RequestInit
): Promise<postGameData> {
  const res = await fetch(input, init);
  return res.json();
}
function PostGame(): React.ReactElement {
  const router = useRouter();
  const { data, error } = useSWR<postGameData>('/api/postGame', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <Spinner size="md" color="white" />;
  const { radiantVictory, radiantHeroes, direHeroes } = data;
  return (
    <Layout>
      <PageHeading fontSize={['4xl', '5xl']}>
        {radiantVictory ? 'Radiant' : 'Dire'} Victory
      </PageHeading>
      <HeroBar
        background="rgba(0, 255, 163, 0.37)"
        heroes={radiantVictory ? radiantHeroes : direHeroes}
      />
      <Heading color="white" fontSize={['lg', 'xl']} fontWeight="300" my={-16}>
        vs
      </Heading>
      <HeroBar heroes={!radiantVictory ? radiantHeroes : direHeroes} />
      <Button onClick={() => router.push('/')}>Play Again</Button>
    </Layout>
  );
}

export default withAuth(PostGame);
