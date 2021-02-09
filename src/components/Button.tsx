import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export default function Button({
  children,
  fontSize,
  onClick,
}: ButtonProps): React.ReactElement {
  return (
    <ChakraButton
      backgroundColor="pink"
      h={[14]}
      w={[36, 48]}
      borderRadius={28}
      fontFamily="Montserrat"
      fontWeight="normal"
      color="white"
      fontSize={fontSize ?? ['lg', '2xl']}
      onClick={onClick}
      _focus={{
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: '0.125rem',
      }}
      _active={{
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: '0.125rem',
      }}
      _hover={{
        backgroundColor: 'black',
        borderColor: 'pink',
        borderWidth: '0.125rem',
      }}
    >
      {children}
    </ChakraButton>
  );
}
