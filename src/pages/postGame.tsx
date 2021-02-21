import { Heading } from '@chakra-ui/react';
import withAuth from '@/containers/withAuthentication';
import { useRouter } from 'next/router';
import {
  Button,
  HeroBar,
  Layout,
  PageHeading,
} from '../components/CustomComponents';

function PostGame(): React.ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading fontSize={['4xl', '5xl']}>Radiant Victory</PageHeading>
      <HeroBar background="rgba(0, 255, 163, 0.37)" />
      <Heading color="white" fontSize={['lg', 'xl']} fontWeight="300" my={-16}>
        vs
      </Heading>
      <HeroBar />
      <Button onClick={() => router.push('/')}>Play Again</Button>
    </Layout>
  );
}

export default withAuth(PostGame);
