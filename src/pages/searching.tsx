import { Flex, Heading, Image } from '@chakra-ui/react';
import { GradientCard, Button } from '../components/CustomComponents';
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
      <GradientCard w="311px" h="352px">
        <Image src="searchJug.gif" margin="0px 0 0 20px" />
      </GradientCard>
      <Button>Cancel</Button>
    </Flex>
  );
}
