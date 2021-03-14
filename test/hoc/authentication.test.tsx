import Lobby from '@/pages/lobby';
import Searching from '@/pages/searching';
import {
  render,
  screen,
  cleanup,
  mockAuthenticate,
  mockRouter,
} from '../test-utils';

export const loadingAuth = (Component: React.FunctionComponent): void => {
  describe('is loading session', () => {
    afterEach(cleanup);
    it('shows spinner', () => {
      mockAuthenticate({ sessionState: false, loading: true });
      render(<Component />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
};

export const notAuth = (Component: React.FunctionComponent): void => {
  describe('is not authenticated', () => {
    afterEach(cleanup);
    it('pushes index to router', () => {
      mockAuthenticate({ sessionState: false });
      render(<Component />);
      expect(mockRouter.replace).toHaveBeenCalledWith('/login');
    });
  });
};

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));

afterEach(cleanup);
describe('Authentication', () => {
  describe('for /Lobby', () => {
    loadingAuth(Lobby);
    notAuth(Lobby);
  });
  describe('for /Searching', () => {
    loadingAuth(Searching);
    notAuth(Searching);
  });
});
