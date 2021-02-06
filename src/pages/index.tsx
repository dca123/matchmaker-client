import { Image, Heading } from '@chakra-ui/react';
import { Button, GradientCard } from '../components/CustomComponents';
import { useRouter } from 'next/dist/client/router';
export default function Index() {
  const router = useRouter();
  return (
    <GradientCard minH="90vh" w="90%">
      <Heading fontSize={['36px', '42px', '64px']} color="white">
        DOTA Newbs
      </Heading>
      <Image h="120px" w="120px" src="dotaImg.png" />
      <Button fontSize="24px" onClick={() => router.push('/roleSelection')}>
        Login via Steam
      </Button>
    </GradientCard>
  );
}
