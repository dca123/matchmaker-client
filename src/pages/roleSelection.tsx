import { Flex, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Button from '../components/Button';
import GradientCard from '../components/GradientCard';

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
        Select Your Roles
      </Heading>
      <GradientCard h="352px" w="311px">
        <Text lineHeight="33px" fontSize="24px" color="white">
          Hard Support
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="pink">
          Soft Support
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="white">
          Offlane
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="pink">
          Midlane
        </Text>
        <Text lineHeight="33px" fontSize="24px" color="white">
          Hard Carry
        </Text>
      </GradientCard>
      <Button onClick={() => router.push('/searching')}>Search</Button>
    </Flex>
  );
}
