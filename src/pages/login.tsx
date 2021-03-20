import { Heading, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  Button,
  GradientCard,
  Layout,
  Image,
} from '@/components/CustomComponents';
import { signIn, useSession } from '@/libs/session';

export default function Login(): React.ReactElement {
  const router = useRouter();
  const [session, loading] = useSession();
  if (loading) return <Spinner size="md" color="white" />;
  if (session) {
    router.replace('/');
    return <></>;
  }
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
        {!session && (
          <Button fontSize={['sm', 'lg']} onClick={signIn}>
            Login via Steam
          </Button>
        )}
      </GradientCard>
    </Layout>
  );
}
