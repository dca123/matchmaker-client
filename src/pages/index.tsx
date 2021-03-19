import { Dispatch, SetStateAction } from 'react';
import { Flex } from '@chakra-ui/react';
import SearchConfigCard from '@/layouts/SearchConfigCard';
import { Layout, PageHeading, Button } from '@/components/CustomComponents';
import withAuth from '@/hoc/withAuthentication';
import { Session } from 'next-auth/client';
import { User } from 'next-auth';
import { Ticket, useTicket } from '@/contexts/ticketContext';
import { NextRouter, useRouter } from 'next/router';
import endpoint from '../../endpoints.config';
import {
  useSearchConfig,
  roleSelectionDictionary,
  serverSelectionDictionary,
} from '../reducers/searchStateReducer';

const postData = async (
  { id, steamID }: User,
  roleSelection: Record<string, boolean>,
  serverSelection: Record<string, boolean>
): Promise<Ticket> => {
  const ticketID = await fetch(`${endpoint.NEXT_PUBLIC_API_RMM}/ticket`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      playerID: id,
      steamID,
      serverSelection: Object.keys(serverSelection).filter(
        (role) => serverSelection[role]
      )[0],
      roleSelection: Object.keys(roleSelection).filter(
        (role) => roleSelection[role]
      )[0],
    }),
  });
  return ticketID.json();
};

const createTicket = async (
  setTicket: Dispatch<SetStateAction<Ticket>>,
  session: User,
  router: NextRouter,
  roleSelection: Record<string, boolean>,
  serverSelection: Record<string, boolean>
): Promise<void> => {
  const returnData = await postData(session, roleSelection, serverSelection);
  setTicket(new Ticket(returnData.ticketID));
  sessionStorage.setItem('ticketID', returnData.ticketID ?? '');
  router.push('/searching');
};

function Index({ session }: { session: Session }): React.ReactElement {
  const { setTicket } = useTicket();
  const router = useRouter();
  const [
    { roleSelection, serverSelection },
    dispatchSearchConfig,
  ] = useSearchConfig();
  return (
    <Layout>
      <PageHeading>Are You Ready ?</PageHeading>
      <Flex w={['20rem', '36rem']} justifyContent="space-around">
        <SearchConfigCard
          dispatchSearchConfig={dispatchSearchConfig}
          dictionary={roleSelectionDictionary}
          configState={roleSelection}
          configType="role"
          configTitle="Roles"
        />
        <SearchConfigCard
          dispatchSearchConfig={dispatchSearchConfig}
          dictionary={serverSelectionDictionary}
          configState={serverSelection}
          configType="server"
          configTitle="Server"
        />
      </Flex>
      <Button
        onClick={() =>
          createTicket(
            setTicket,
            session.user,
            router,
            roleSelection,
            serverSelection
          )
        }
      >
        Search
      </Button>
    </Layout>
  );
}
export default withAuth(Index);
