import { useRouter } from 'next/router';
import { useReducer } from 'react';
import { actionType } from '@/components/SearchConfigButton';
import { Flex } from '@chakra-ui/react';
import SearchConfigCard from '@/layouts/SearchConfigCard';
import { Layout, PageHeading, Button } from '@/components/CustomComponents';
import withAuth from '@/containers/withAuthentication';

type searchConfigType = {
  roleSelection: Record<string, boolean>;
  serverSelection: Record<string, boolean>;
};

const defaultSearchConfig = {
  roleSelection: {
    hs: false,
    ss: false,
    off: false,
    mid: false,
    hc: false,
  },
  serverSelection: {
    us_east: false,
    us_west: false,
    eu_west: false,
  },
};

const roleSelectionDictionary = [
  'Hard Support',
  'Soft Support',
  'Offlane',
  'Midlane',
  'Hard Carry',
];
const serverSelectionDictionary = ['US East', 'US West', 'EU West'];
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

function RoleSelection(): React.ReactElement {
  const router = useRouter();
  const [
    { roleSelection, serverSelection },
    dispatchSearchConfigState,
  ] = useReducer(toggleSearchConfig, defaultSearchConfig);
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
      <Button onClick={() => router.push('/searching')}>Search</Button>
    </Layout>
  );
}
export default withAuth(RoleSelection);
