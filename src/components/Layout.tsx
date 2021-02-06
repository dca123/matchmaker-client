import { Flex, FlexProps } from '@chakra-ui/react';
export default function Layout({ children, ...rest }: FlexProps) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      minH="90vh"
      minW="100%"
      {...rest}
    >
      {children}
    </Flex>
  );
}
