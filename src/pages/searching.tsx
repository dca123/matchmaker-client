import { Flex, Heading, Text, Button, Image } from '@chakra-ui/react';

export default function roleSelection() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
      h={['80%', '50%']}
    >
      <Heading fontWeight="400" color="white" fontSize={['35px', '48px']}>
        Finding game
      </Heading>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        background="linear-gradient(179.99deg, #1D2D50 0.01%, #52057B 193.87%)"
        padding="40px 32px"
        borderRadius="30px"
        w="311px"
        h="352px"
      >
        <Image src="searchJug.gif" margin="0px 0 0 20px" />
      </Flex>
      <Button
        backgroundColor="pink"
        size="lg"
        h="70px"
        w="260px"
        borderRadius="30px"
        fontSize="36px"
        fontFamily="Montserrat"
        fontWeight="normal"
        color="white"
      >
        Cancel
      </Button>
    </Flex>
  );
}
