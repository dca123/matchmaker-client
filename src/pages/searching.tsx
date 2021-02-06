import { Flex, Heading, Image } from '@chakra-ui/react';
import { GradientCard, Button } from '../components/CustomComponents';
import { useRouter } from 'next/dist/client/router';
export default function roleSelection() {
  const router = useRouter();
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="space-around"
      minH="90vh"
    >
      <Heading fontWeight="400" color="white" fontSize={['35px', '48px']}>
        Finding game
      </Heading>
      <GradientCard w="311px" h="352px">
        <Image src="searchJug.gif" margin="0px 0 0 20px" />
      </GradientCard>
      <Button onClick={() => router.push('/lobby')}>Cancel</Button>
    </Flex>
  );
}
