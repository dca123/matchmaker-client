import { Text, Heading } from '@chakra-ui/react';
import GradientCard from './GradientCard';

export interface Player {
  id: string;
  ready: boolean;
}
export interface TeamCardProps {
  teamName: string;
  playerArray?: Player[];
}
export const defaultUser: Player = {
  id: 'Bot',
  ready: false,
};
export const defaultPlayerArray = [
  defaultUser,
  defaultUser,
  defaultUser,
  defaultUser,
  defaultUser,
];
export default function TeamCard({
  teamName,
  playerArray,
}: TeamCardProps): React.ReactElement {
  return (
    <GradientCard w={[36, 60]} h={[48, 80]} py={[4, 5]}>
      <Heading fontWeight="300" fontSize={['2xl', '4xl']} color="white">
        {teamName}
      </Heading>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[0]?.ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[0]?.id}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[1]?.ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[1]?.id}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[2]?.ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[2]?.id}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[3]?.ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[3]?.id}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[4]?.ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[4]?.id}
      </Text>
    </GradientCard>
  );
}
