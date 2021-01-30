import { Flex } from '@chakra-ui/react';
type GradientCardProps = {
  children: React.ReactNode;
  h: string;
  w: string;
};
export default function GradientCard({ children, h, w }: GradientCardProps) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      background="linear-gradient(179.99deg, #1D2D50 0.01%, #52057B 193.87%)"
      padding="40px 32px"
      borderRadius="30px"
      w={w}
      h={h}
    >
      {children}
    </Flex>
  );
}
