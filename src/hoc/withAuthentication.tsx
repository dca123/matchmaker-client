import { useSession } from '@/libs/session';
import { Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { User } from 'src/types/global';

export default function withAuth(
  WrappedComponent: React.FunctionComponent<{ session: User }>
): React.FunctionComponent {
  const RequiresAuthentication = (): React.ReactElement => {
    const [session, loading] = useSession();
    const router = useRouter();
    if (loading) return <Spinner size="md" color="white" />;
    if (!loading && !session) {
      router.replace('/login');
      return <></>;
    }
    if (session) {
      return <WrappedComponent session={session} />;
    }
    return <>Error Occured</>;
  };
  return RequiresAuthentication;
}
