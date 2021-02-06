import { Flex, FlexProps } from '@chakra-ui/react';
export default function Layout({ children, ...rest }: FlexProps) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      minH={['90vh', '60vh']}
      w="100%"
      {...rest}
    >
      {children}
    </Flex>
  );
}
