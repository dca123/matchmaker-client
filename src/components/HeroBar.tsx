import { Flex, FlexProps } from '@chakra-ui/react';
import Hero from './Hero';
export default function HeroBar({}: FlexProps) {
  return (
    <Flex
      borderRadius="60px"
      background="rgba(255, 255, 255, 0.05)"
      // h="84px"
      // w="620px"
      w="22rem"
      padding="20px"
      justifyContent="space-around"
    >
      <Hero />
      <Hero src="horiz/zuus_hphover.png" />
      <Hero src="horiz/enigma_hphover.png" />
      <Hero src="horiz/kunkka_hphover.png" />
      <Hero src="horiz/lich_hphover.png" />
    </Flex>
  );
}
