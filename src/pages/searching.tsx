import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import {
  GradientCard,
  Button,
  PageHeading,
  Layout,
} from '../components/CustomComponents';

export default function RoleSelection(): React.ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading>Finding Game</PageHeading>
      <GradientCard w={[64, 80]} h={[64, 80]}>
        <Image src="searchJug.gif" ml={5} />
      </GradientCard>
      <Button onClick={() => router.push('/lobby')}>Cancel</Button>
    </Layout>
  );
}
