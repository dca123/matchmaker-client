import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { RoleTypes } from 'components/RoleText';
import withAuth from '../containers/withAuthentication';
import Button from '../components/Button';
import {
  GradientCard,
  Layout,
  PageHeading,
  RoleText,
} from '../components/CustomComponents';

const roleSelection: RoleTypes = {
  hs: false,
  ss: false,
  off: false,
  mid: false,
  hc: false,
};

const roleSelectionNames = [
  'Hard Support',
  'Soft Support',
  'Offlane',
  'Midlane',
  'Hard Carry',
];

function RoleSelection(): React.ReactElement {
  const router = useRouter();
  const [roles, setRoles] = useState(roleSelection);
  return (
    <Layout>
      <PageHeading> Select Your Roles </PageHeading>
      <GradientCard h={[64, 80]} w={[52, 64]} py={[2, 5]}>
        {Object.keys(roleSelection).map(
          (roleKey: string, roleKeyIdx: number) => {
            return (
              <RoleText
                key={roleKey}
                setRoles={setRoles}
                roles={roles}
                roleKey={roleKey as keyof RoleTypes}
              >
                {roleSelectionNames[roleKeyIdx]}
              </RoleText>
            );
          }
        )}
      </GradientCard>
      <Button onClick={() => router.push('/searching')}>Search</Button>
    </Layout>
  );
}
export default withAuth(RoleSelection);
