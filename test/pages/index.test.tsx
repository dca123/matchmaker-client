import Index from '@/pages/index';
import userEvent from '@testing-library/user-event';
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

    describe('Search Config Selection', () => {
      it('only selects once', () => {
        userEvent.click(screen.getByTestId('Player'));
        expect(screen.getByTestId('Player')).toHaveAttribute('data-checked');
        expect(screen.getByTestId('Coach')).not.toHaveAttribute('data-checked');

        userEvent.click(screen.getByTestId('Coach'));
        expect(screen.getByTestId('Coach')).toHaveAttribute('data-checked');
        expect(screen.getByTestId('Player')).not.toHaveAttribute(
          'data-checked'
        );
      });
    });
  });
});
