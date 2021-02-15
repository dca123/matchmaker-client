import { Text, Heading } from '@chakra-ui/react';
import GradientCard from './GradientCard';

interface TeamCardProps {
  teamName: string;
  playerArray?: string[];
}
const defaultProps = {
  playerArray: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
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
      <Text fontSize={['md', 'xl']} color="white" data-testid="playerName">
        {playerArray?.slice(0, 1)}
      </Text>
      <Text fontSize={['md', 'xl']} color="pink" data-testid="playerName">
        {playerArray?.slice(1, 2)}
      </Text>
      <Text fontSize={['md', 'xl']} color="white" data-testid="playerName">
        {playerArray?.slice(2, 3)}
      </Text>
      <Text fontSize={['md', 'xl']} color="pink" data-testid="playerName">
        {playerArray?.slice(3, 4)}
      </Text>
      <Text fontSize={['md', 'xl']} color="white" data-testid="playerName">
        {playerArray?.slice(4, 5)}
      </Text>
    </GradientCard>
  );
}
TeamCard.defaultProps = defaultProps;
