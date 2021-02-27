import { Flex, FlexProps } from '@chakra-ui/react';
import Hero from '@/components/Hero';

export default function HeroBar({
  background,
  heroes,
}: FlexProps & {
  heroes: string[];
}): React.ReactElement {
  return (
    <Flex
      borderRadius="full"
      background={background ?? 'rgba(255, 255, 255, 0.05)'}
      w={['22rem', '44rem']}
      padding={4}
      justifyContent="space-around"
    >
      {heroes.map((heroName) => (
        <Hero key={heroName} src={`/horiz/${heroName}.png`} />
      ))}
    </Flex>
  );
}
