import { Dispatch, SetStateAction, useReducer } from 'react';
import { actionType } from '@/components/SearchConfigButton';
import { Flex } from '@chakra-ui/react';
import SearchConfigCard from '@/layouts/SearchConfigCard';
import { Layout, PageHeading, Button } from '@/components/CustomComponents';
import withAuth from '@/hoc/withAuthentication';
import { Session } from 'next-auth/client';
import { User } from 'next-auth';
import { Ticket, useTicket } from '@/contexts/ticketContext';
import { NextRouter, useRouter } from 'next/router';
import endpoint from '../../endpoints.config';

type searchConfigType = {
  roleSelection: Record<string, boolean>;
  serverSelection: Record<string, boolean>;
};

const defaultSearchConfig = {
  roleSelection: {
    rockie: false,
    coach: false,
  },
  serverSelection: {
    us: false,
    eu: false,
    sea: false,
  },
};

const roleSelectionDictionary = ['Player', 'Coach'];
const serverSelectionDictionary = ['US', 'EU', 'SEA'];
const toggleSearchConfig = (
  state: searchConfigType,
  action: actionType
): searchConfigType => {
  const { configValue } = action;
  switch (action.configType) {
    case 'role':
      return {
        ...state,
        roleSelection: {
          ...state.roleSelection,
          [configValue]: !state.roleSelection[configValue],
        },
      };
      break;
    case 'server':
      return {
        ...state,
        serverSelection: {
          ...state.serverSelection,
          [configValue]: !state.serverSelection[configValue],
        },
      };
      break;
    default:
      throw new Error('Unexcepted Action Type');
  }
};

const postData = async ({ id, steamID }: User): Promise<Ticket> => {
  const ticketID = await fetch(`${endpoint.NEXT_PUBLIC_API_RMM}/ticket`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      playerID: id,
      steamID,
    }),
  });
  return ticketID.json();
};
const createTicket = async (
  setTicket: Dispatch<SetStateAction<Ticket>>,
  session: User,
  router: NextRouter
): Promise<void> => {
  const returnData = await postData(session);
  setTicket(returnData);
  sessionStorage.setItem('ticketID', returnData.ticketID ?? '');
  router.push('/searching');
};
function Index({ session }: { session: Session }): React.ReactElement {
  const [
    { roleSelection, serverSelection },
    dispatchSearchConfigState,
  ] = useReducer(toggleSearchConfig, defaultSearchConfig);
  const { setTicket } = useTicket();
  const router = useRouter();

  return (
    <Layout>
      <PageHeading>Are You Ready ?</PageHeading>
      <Flex w={['20rem', '36rem']} justifyContent="space-around">
        <SearchConfigCard
          dispatchSearchConfigState={dispatchSearchConfigState}
          dictionary={roleSelectionDictionary}
          configState={roleSelection}
          configType="role"
          configTitle="Roles"
        />
        <SearchConfigCard
          dispatchSearchConfigState={dispatchSearchConfigState}
          dictionary={serverSelectionDictionary}
          configState={serverSelection}
          configType="server"
          configTitle="Server"
        />
      </Flex>
      <Button onClick={() => createTicket(setTicket, session.user, router)}>
        Search
      </Button>
    </Layout>
  );
}
export default withAuth(Index);
