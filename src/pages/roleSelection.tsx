import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import withAuth from '../containers/withAuthentication';
import Button from '../components/Button';
import {
  GradientCard,
  Layout,
  PageHeading,
} from '../components/CustomComponents';

function RoleSelection(): React.ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading> Select Your Roles </PageHeading>
      <GradientCard h={[64, 80]} w={[52, 64]} py={[2, 5]}>
        <Text fontSize={['lg', '2xl']} color="white">
          Hard Support
        </Text>
        <Text fontSize={['lg', '2xl']} color="pink">
          Soft Support
        </Text>
        <Text fontSize={['lg', '2xl']} color="white">
          Offlane
        </Text>
        <Text fontSize={['lg', '2xl']} color="pink">
          Midlane
        </Text>
        <Text fontSize={['lg', '2xl']} color="white">
          Hard Carry
        </Text>
      </GradientCard>
      <Button onClick={() => router.push('/searching')}>Search</Button>
    </Layout>
  );
}
export default withAuth(RoleSelection);
