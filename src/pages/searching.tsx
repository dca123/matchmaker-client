import { Image } from '@chakra-ui/react';
import withAuth from 'src/hoc/withAuthentication';
import { useRouter } from 'next/router';
import {
  GradientCard,
  Button,
  PageHeading,
  Layout,
} from '@/components/CustomComponents';

function RoleSelection(): React.ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading>Finding Game</PageHeading>
      <GradientCard w={[64, 80]} h={[64, 80]}>
        <Image alt="Juggernaut Running" src="searchJug.gif" ml={5} />
      </GradientCard>
      <Button onClick={() => router.push('/lobby')}>Cancel</Button>
    </Layout>
  );
}

export default withAuth(RoleSelection);
