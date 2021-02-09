import { Image, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { signIn, useSession } from 'next-auth/client';
import { Button, GradientCard, Layout } from '@/components/CustomComponents';

export default function Index(): React.ReactElement {
  const router = useRouter();
  const [session] = useSession();
  return (
    <Layout>
      <GradientCard h={['26rem', '32rem']} w={[72, 96]}>
        <Heading fontSize={['3xl', '4xl']} color="white">
          Find Me a Lobby
        </Heading>
        <Image h={32} w={32} src="dotaImg.png" />
        {session && (
          <Button
            fontSize={['sm', 'lg']}
            onClick={() => router.push('/roleSelection')}
          >
            Find Lobby
          </Button>
        )}
        {!session && (
          <Button fontSize={['sm', 'lg']} onClick={() => signIn('discord')}>
            Login via Discord
          </Button>
        )}
      </GradientCard>
    </Layout>
  );
}
