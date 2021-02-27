import { Text, Heading } from '@chakra-ui/react';
import GradientCard from './GradientCard';

export interface Player {
  username: string;
  ready: boolean;
}
export interface TeamCardProps {
  teamName: string;
  playerArray?: Player[];
}
export const defaultUser = {
  username: 'Player',
  ready: false,
};
const defaultProps = {
  playerArray: [
    defaultUser,
    defaultUser,
    defaultUser,
    defaultUser,
    defaultUser,
  ],
};
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
        color={playerArray?.[0].ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[0].username}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[0].ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[1].username}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[0].ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[2].username}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[0].ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[3].username}
      </Text>
      <Text
        fontSize={['md', 'xl']}
        color={playerArray?.[0].ready ? 'pink' : 'white'}
        data-testid="playerName"
      >
        {playerArray?.[4].username}
      </Text>
    </GradientCard>
  );
}
TeamCard.defaultProps = defaultProps;
