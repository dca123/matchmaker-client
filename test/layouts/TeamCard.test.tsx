import { cleanup, render, screen } from '@testing-library/react';
import TeamCard, { Player } from '@/layouts/TeamCard';

afterEach(cleanup);
describe('TeamCard', () => {
  it('renders title', () => {
    render(<TeamCard teamName="Radiant" />);
    expect(screen.getByText('Radiant')).toBeInTheDocument();
  });

  const player = (playerName: string): Player => ({
    id: playerName,
    ready: false,
  });
  it('renders team member names', () => {
    const playerArray = [
      player('Player 1'),
      player('Player 2'),
      player('Player 3'),
      player('Player 4'),
      player('Player 5'),
    ];
    render(<TeamCard teamName="Radiant" playerArray={playerArray} />);
    expect(screen.getAllByText(/Player \d/)).toHaveLength(playerArray.length);
  });
  it('renders team members on incomplete team', () => {
    const playerArray = [
      player('Player 1'),
      player('Player 3'),
      player('Player 4'),
    ];
    render(<TeamCard teamName="Radiant" playerArray={playerArray} />);
    expect(screen.getAllByText(/Player \d/)).toHaveLength(playerArray.length);
  });
});
