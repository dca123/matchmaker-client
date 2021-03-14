import Index from '@/pages/index';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
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

    describe('search config selection', () => {
      it('only selects an option once', () => {
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

    describe('clicking search', () => {
      it('sets the sessionstorage', async () => {
        global.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve({
            json: () => Promise.resolve({ ticketID: '123abc456' }),
          })
        );

        userEvent.click(screen.getByText('Search'));
        await waitFor(() => expect(global.fetch).toBeCalled());
        expect(sessionStorage.getItem('ticketID')).toBe('123abc456');
      });
    });
  });
});
