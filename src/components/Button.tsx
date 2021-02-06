import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
export default function Button({ children, fontSize, onClick }: ButtonProps) {
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
      onClick={onClick}
      _focus={{
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: '2px',
      }}
      _active={{
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: '2px',
      }}
      _hover={{
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: '2px',
      }}
    >
      {children}
    </ChakraButton>
  );
}
