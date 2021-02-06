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
      h={14}
      w={36}
      borderRadius={28}
      fontFamily="Montserrat"
      fontWeight="normal"
      color="white"
      fontSize={fontSize || 'lg'}
      onClick={onClick}
      {...rest}
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
