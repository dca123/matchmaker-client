import { Heading, Flex, Progress, Text } from '@chakra-ui/react';
import GradientCard from '../components/GradientCard';

export default function Lobby() {
  return (
    <Flex
      w="827px"
      h="800px"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Heading color="white" fontSize="64px" fontWeight="normal">
        Starting Game
      </Heading>
      <Progress
        value={30}
        size="sm"
        // colorScheme="green"
        w="85%"
        borderRadius="30px"
      />
      <Flex w="100%" justifyContent="space-between">
        <GradientCard w="361px" h="494px">
          <Heading fontWeight="300" fontSize="64px" color="white">
            Radiant
          </Heading>
          <Text fontSize="36px" color="white">
            Player 1
          </Text>
          <Text fontSize="36px" color="white">
            Player 2
          </Text>
          <Text fontSize="36px" color="white">
            Player 3
          </Text>
          <Text fontSize="36px" color="pink">
            Player 4
          </Text>
          <Text fontSize="36px" color="white">
            Player 5
          </Text>
        </GradientCard>
        <GradientCard w="361px" h="494px">
          <Heading fontWeight="300" fontSize="64px" color="white">
            Dire
          </Heading>
          <Text fontSize="36px" color="white">
            Player 1
          </Text>
          <Text fontSize="36px" color="white">
            Player 2
          </Text>
          <Text fontSize="36px" color="white">
            Player 3
          </Text>
          <Text fontSize="36px" color="pink">
            Player 4
          </Text>
          <Text fontSize="36px" color="pink">
            Player 5
          </Text>
        </GradientCard>
      </Flex>
      <Heading fontSize="36px" color="white" fontWeight="300">
        Type !ready in lobby chat
      </Heading>
    </Flex>
  );
}
