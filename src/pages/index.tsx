import { Image, Heading } from '@chakra-ui/react';
import { Button, GradientCard, Layout } from '../components/CustomComponents';
import { useRouter } from 'next/dist/client/router';
export default function Index() {
  const router = useRouter();
  return (
    <Layout>
      <GradientCard h={'26rem'} w={72}>
        <Heading fontSize={['3xl', '4xl']} color="white">
          DOTA Newbs
        </Heading>
        <Image h={32} w={32} src="dotaImg.png" />
        <Button fontSize="sm" onClick={() => router.push('/roleSelection')}>
          Login via Steam
        </Button>
      </GradientCard>
    </Layout>
  );
}
