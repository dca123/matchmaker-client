import { Flex, FlexProps } from '@chakra-ui/react';

export default function GradientCard({
  children,
  h,
  w,
  py,
  justifyContent,
}: FlexProps): React.ReactElement {
  return (
    <Flex
      flexDirection="column"
      justifyContent={justifyContent ?? 'space-around'}
      alignItems="center"
      background="linear-gradient(179.99deg, #1D2D50 0.01%, #52057B 350%)"
      borderRadius="xl"
      w={w}
      h={h}
      py={py}
    >
      {children}
    </Flex>
  );
}
