import { Image, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { Button, GradientCard, Layout } from '../components/CustomComponents';

export default function Index(): React.ReactElement {
  const router = useRouter();
  return (
    <Layout>
      <GradientCard h={['26rem', '32rem']} w={[72, 96]}>
        <Heading fontSize={['3xl', '4xl']} color="white">
          DOTA Newbs
        </Heading>
        <Image h={32} w={32} src="dotaImg.png" />
        <Button
          fontSize={['sm', 'lg']}
          onClick={() => router.push('/roleSelection')}
        >
          Login via Steam
        </Button>
      </GradientCard>
    </Layout>
  );
}
