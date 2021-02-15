import { Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function withAuth(
  WrappedComponent: React.FunctionComponent
): React.FunctionComponent {
  const RequiresAuthentication = (): React.ReactElement => {
    const [session, loading] = useSession();
    const router = useRouter();
    if (loading) return <Spinner size="md" color="white" />;
    if (!loading && !session) {
      router.replace('/');
      return <></>;
    }
    return <WrappedComponent />;
  };
  return RequiresAuthentication;
}
