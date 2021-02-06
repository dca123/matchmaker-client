import { Flex, Heading } from '@chakra-ui/react';
import { Button, HeroBar } from '../components/CustomComponents';

export default function postGame() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      minH="80vh"
      minW="100%"
      justifyContent="space-around"
    >
      <Heading fontWeight="300" color="white" fontSize={['35px', '64px']}>
        Radiant Victory
      </Heading>
      <HeroBar />
      <Heading color="white" fontSize="24px" fontWeight="300" my={-16}>
        vs
      </Heading>
      <HeroBar />
      <Button>Play Again</Button>
    </Flex>
  );
}
