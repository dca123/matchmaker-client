import {
  Image,
  Flex,
  Heading,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Index() {
  const buttonSize = useBreakpointValue({ base: 'xs', sm: 'sm', md: 'md' });
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      background="linear-gradient(179.99deg, #1D2D50 0.01%, #52057B 193.87%);"
      w="50%"
      h="50%"
      borderRadius="30px"
    >
      <Heading size={buttonSize} color="white" animate={{ scale: 0.5 }}>
        DOTA Newbs
      </Heading>
      <Image h="120px" w="120px" src="dotaImg.png" />
      <Button backgroundColor="pink" size={buttonSize}>
        Login Via Steam
      </Button>
    </Flex>
  );
}
