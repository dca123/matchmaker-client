import { Heading, Flex, Progress } from '@chakra-ui/react';
import { TeamCard } from '../components/CustomComponents';

export default function Lobby() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      minH="80vh"
      minW="100%"
    >
      <Heading color="white" fontSize={['35px', '64px']} fontWeight="normal">
        Starting Game
      </Heading>
      <Progress value={30} size="sm" w="85%" borderRadius="30px" my={-36} />
      <Flex w="100%" justifyContent="space-around" wrap="wrap">
        <TeamCard teamName="Radiant" />
        <TeamCard teamName="Dire" />
        {/* <TeamCard teamName="Dire" /> */}
        {/* <Heading fontSize="36px" color="white" fontWeight="300">
          Type !ready in lobby chat
        </Heading> */}
      </Flex>
    </Flex>
  );
}
