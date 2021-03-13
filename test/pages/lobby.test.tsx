import Lobby from '@/pages/lobby';
import {
  mockAuthenticate,
  cleanup,
  render,
  screen,
  mockRouter,
} from '../test-utils';
import { loadingAuth, notAuth } from './authTests';

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));
describe('/lobby', () => {
  loadingAuth(Lobby);
  notAuth(Lobby);

  describe('is authenticated', () => {
    beforeEach(() => {
      mockAuthenticate();
      render(<Lobby />);
    });

    afterEach(cleanup);
    it('renders', () => {
      expect(screen.getByText('Waiting on the Ancients')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByText('Type !ready in lobby chat')).toBeInTheDocument();
      expect(screen.getByText('Radiant')).toBeInTheDocument();
      expect(screen.getByText('Dire')).toBeInTheDocument();
      expect(screen.queryAllByTestId('playerName')).toHaveLength(10);
    });
  });
});
