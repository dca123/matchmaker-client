import { Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function withAuth(
  WrappedComponent: React.FunctionComponent
): React.ReactNode {
  const RequiresAuthentication = (): React.ReactNode => {
    const [session, loading] = useSession();
    const router = useRouter();
    if (loading) return <Spinner size="md" color="white" />;
    if (!loading && !session) {
      router.replace('/');
      return null;
    }
    return <WrappedComponent />;
  };
  return RequiresAuthentication;
}
