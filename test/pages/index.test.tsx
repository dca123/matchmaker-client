import Index from '@/pages/index';
import {
  screen,
  cleanup,
  render,
  mockAuthenticate,
  mockRouter,
} from '../test-utils';
import { loadingAuth, notAuth } from './authTests';

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));

describe('/index', () => {
  loadingAuth(Index);
  notAuth(Index);

  describe('is authenticated', () => {
    beforeEach(() => {
      mockAuthenticate();
      render(<Index />);
    });

    afterEach(cleanup);

    it('renders', () => {
      expect(screen.getByText('Are You Ready ?')).toBeInTheDocument();
      expect(screen.getByText('Search')).toBeInTheDocument();
    });
  });
});
