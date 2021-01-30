import { Image, Heading } from '@chakra-ui/react';
import { Button, GradientCard } from '../components/CustomComponents';
export default function Index() {
  return (
    <GradientCard h="564px" w="571px">
      <Heading fontSize={['36px', '64px']} color="white">
        DOTA Newbs
      </Heading>
      <Image h="120px" w="120px" src="dotaImg.png" />
      <Button fontSize="24px">Login Via Steam</Button>
    </GradientCard>
  );
}
