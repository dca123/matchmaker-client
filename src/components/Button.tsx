import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
export default function Button({
  children,
  fontSize,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <ChakraButton
      backgroundColor="pink"
      h="70px"
      w="260px"
      borderRadius="30px"
      fontFamily="Montserrat"
      fontWeight="normal"
      color="white"
      fontSize={fontSize || '36px'}
      onClick={onClick}
      {...rest}
      _focus={{
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: '2px',
        boxShadow: 'none !important',
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
