import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import {
  Button,
  HeroBar,
  Layout,
  PageHeading,
} from '../components/CustomComponents';

export default function postGame() {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading>Radiant Victory</PageHeading>
      <HeroBar />
      <Heading color="white" fontSize={20} fontWeight="300" my={-16}>
        vs
      </Heading>
      <HeroBar />
      <Button onClick={() => router.push('/roleSelection')}>Play Again</Button>
    </Layout>
  );
}
