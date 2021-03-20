import {
  Avatar,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

export default function UserAvatar(): React.ReactElement {
  const [session] = useSession();
  const avatarSize = useBreakpointValue(['md', 'xl']);
  if (session) {
    return (
      <Menu>
        <MenuButton
          as={Avatar}
          position="absolute"
          src={session.user.image}
          right={[8, 16]}
          top={[8, 16]}
          size={avatarSize}
          shadow="lg"
        />
        <MenuList>
          <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
        </MenuList>
      </Menu>
    );
  }
  return <></>;
}
