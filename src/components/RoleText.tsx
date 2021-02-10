import { Text } from '@chakra-ui/react';

export interface RoleTypes {
  hs: boolean;
  ss: boolean;
  off: boolean;
  mid: boolean;
  hc: boolean;
}

interface RoleTextProps {
  children: React.ReactChild;
  setRoles: (role: RoleTypes) => void;
  roles: RoleTypes;
  roleKey: keyof RoleTypes;
}

export default function RoleText({
  children,
  setRoles,
  roles,
  roleKey,
}: RoleTextProps): React.ReactElement {
  return (
    <Text
      // flips the value of the role for the passed in role id
      onClick={() => setRoles({ ...roles, [roleKey]: !roles[roleKey] })}
      fontSize={['lg', '2xl']}
      color={roles[roleKey] ? 'pink' : 'white'}
      userSelect="none"
    >
      {children}
    </Text>
  );
}
