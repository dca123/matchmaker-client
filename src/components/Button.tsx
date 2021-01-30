import { Button as ChakraButton } from '@chakra-ui/react';
type Props = {
  children: React.ReactNode;
  fontSize?: string;
};

export default function Button({ children, fontSize }: Props) {
  return (
    <ChakraButton
      backgroundColor="pink"
      size="lg"
      h="70px"
      w="260px"
      borderRadius="30px"
      fontFamily="Montserrat"
      fontWeight="normal"
      color="white"
      fontSize={fontSize || '36px'}
    >
      {children}
    </ChakraButton>
  );
}
