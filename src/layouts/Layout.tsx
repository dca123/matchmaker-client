import { Flex, FlexProps } from '@chakra-ui/react';

export default function Layout({ children }: FlexProps): React.ReactElement {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      minH={['90vh', '60vh']}
      w="100%"
    >
      {children}
    </Flex>
  );
}
