import { Flex, Heading, Image } from '@chakra-ui/react';
import Button from '../components/Button';

export default function postGame() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      h="553px"
      w="620px"
      justifyContent="space-between"
    >
      <Heading color="white" fontSize="64px" fontWeight="300">
        Radiant Victory
      </Heading>
      <Flex
        borderRadius="60px"
        background="rgba(23, 217, 147, 0.15)"
        h="84px"
        w="620px"
        padding="20px"
        justifyContent="space-around"
      >
        <Image src="horiz/alchemist_hphover.png" h="45px" w="80px" />
        <Image src="horiz/arc_warden_hphover.png" h="45px" w="80px" />
        <Image src="horiz/centaur_hphover.png" h="45px" w="80px" />
        <Image src="horiz/elder_titan_hphover.png" h="45px" w="80px" />
        <Image src="horiz/gyrocopter_hphover.png" h="45px" w="80px" />
      </Flex>
      <Heading color="white" fontSize="48px" fontWeight="300">
        vs
      </Heading>
      <Flex
        borderRadius="60px"
        background="rgba(255, 255, 255, 0.05)"
        h="84px"
        w="620px"
        padding="20px"
        justifyContent="space-around"
      >
        <Image src="horiz/dazzle_hphover.png" h="45px" w="80px" />
        <Image src="horiz/zuus_hphover.png" h="45px" w="80px" />
        <Image src="horiz/enigma_hphover.png" h="45px" w="80px" />
        <Image src="horiz/kunkka_hphover.png" h="45px" w="80px" />
        <Image src="horiz/lich_hphover.png" h="45px" w="80px" />
      </Flex>
      <Button>Play Again</Button>
    </Flex>
  );
}
