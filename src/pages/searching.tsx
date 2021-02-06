import { Image } from '@chakra-ui/react';
import {
  GradientCard,
  Button,
  PageHeading,
  Layout,
} from '../components/CustomComponents';
import { useRouter } from 'next/dist/client/router';
export default function roleSelection() {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading>Finding Game</PageHeading>
      <GradientCard w={64} h={64}>
        <Image src="searchJug.gif" ml={5} />
      </GradientCard>
      <Button onClick={() => router.push('/lobby')}>Cancel</Button>
    </Layout>
  );
}
