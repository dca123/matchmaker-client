import '../matchMedia';
import Searching from '@/pages/searching';
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
describe('/searching', () => {
  loadingAuth(Searching);
  notAuth(Searching);

  describe('is authenticated', () => {
    beforeEach(() => {
      mockAuthenticate();
      render(<Searching />);
    });

    afterEach(cleanup);

    it('renders', () => {
      expect(screen.getByRole('heading')).toHaveTextContent('Finding Game');
      expect(screen.getByAltText('Juggernaut Running')).toBeInTheDocument();
      expect(screen.queryByRole('button')).toHaveTextContent('Cancel');
    });
  });
});
