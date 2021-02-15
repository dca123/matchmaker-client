import Lobby from '@/pages/lobby';
import { mockAuthenticate, cleanup, render, screen } from '../test-utils';

describe('/lobby', () => {
  beforeEach(() => {
    mockAuthenticate();
    render(<Lobby />);
  });

  afterEach(cleanup);

  it('renders', () => {
    expect(screen.getByText('Starting Game')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByText('Type !ready in lobby chat')).toBeInTheDocument();
    expect(screen.getByText('Radiant')).toBeInTheDocument();
    expect(screen.getByText('Dire')).toBeInTheDocument();
    expect(screen.queryAllByTestId('playerName')).toHaveLength(10);
  });
});
