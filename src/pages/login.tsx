import { Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import {
  Button,
  GradientCard,
  Layout,
  Image,
} from '@/components/CustomComponents';

export default function Login(): React.ReactElement {
  const router = useRouter();
  const [session] = useSession();
  return (
    <Layout>
      <GradientCard h={['26rem', '32rem']} w={[72, 96]}>
        <Heading fontSize={['2xl', '4xl']} color="white">
          Find Me a Lobby
        </Heading>
        <Image
          alt="Dota 2 Logo"
          height={['128']}
          width={['128']}
          src="/dotaImg.png"
        />
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
