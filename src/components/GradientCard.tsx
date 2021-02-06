import { Flex, FlexProps } from '@chakra-ui/react';
export default function GradientCard({ children, h, w, ...rest }: FlexProps) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      background="linear-gradient(179.99deg, #1D2D50 0.01%, #52057B 193.87%)"
      // padding="10px 16px"
      borderRadius="30px"
      w={w}
      h={h}
      {...rest}
    >
      {children}
    </Flex>
  );
}
