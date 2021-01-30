import { Flex, Heading, Text, Button } from '@chakra-ui/react';

export default function roleSelection() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
      h={['80%', '50%']}
    >
      <Heading fontWeight="400" color="white" fontSize={['35px', '48px']}>
        Select Your Roles
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
        <Text lineHeight="33px" fontSize="24px" color="white">
          Hard Support
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="white">
          Soft Support
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="white">
          Offlane
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="white">
          Midlane
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="white">
          Hard Carry
        </Text>
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
        Search
      </Button>
    </Flex>
  );
}
