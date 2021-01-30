import {
    Flex, Heading, Text, Button
} from '@chakra-ui/react'

export default function roleSelection(){
    return (
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="space-around"
        w="571px"
        h="564px"
      >
        <Heading fontWeight="400" color="white">
          Select Your Roles
        </Heading>
        <Flex
          flexDirection="column"
          alignItems="center"
          background="linear-gradient(179.99deg, #1D2D50 0.01%, #52057B 193.87%)"
          borderRadius="30px"
          padding="21px 32px"
        >
          <Text color="white">Hard Support</Text>
          <Text color="white">Soft Support</Text>
          <Text color="white">Offlane</Text>
          <Text color="white">Midlane</Text>
          <Text color="white">Hard Carry</Text>
        </Flex>
        <Button backgroundColor="pink" size="lg">
          Search
        </Button>
      </Flex>
    );
}