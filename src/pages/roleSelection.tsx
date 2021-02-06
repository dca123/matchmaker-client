import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Button from '../components/Button';
import {
  GradientCard,
  Layout,
  PageHeading,
} from '../components/CustomComponents';

export default function roleSelection() {
  const router = useRouter();
  return (
    <Layout>
      <PageHeading> Select Your Roles </PageHeading>
      <GradientCard h={64} w={52}>
        <Text fontSize="lg" color="white">
          Hard Support
        </Text>
        <Text fontSize="lg" color="pink">
          Soft Support
        </Text>
        <Text fontSize="lg" color="white">
          Offlane
        </Text>
        <Text fontSize="lg" color="pink">
          Midlane
        </Text>
        <Text fontSize="lg" color="white">
          Hard Carry
        </Text>
      </GradientCard>
      <Button onClick={() => router.push('/searching')}>Search</Button>
    </Layout>
  );
}
