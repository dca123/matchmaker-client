import Index from '@/pages/index';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { Ticket } from '@/contexts/ticketContext';
import {
  screen,
  cleanup,
  render,
  mockAuthenticate,
  mockRouter,
  renderWithTicket,
} from '../test-utils';
import { loadingAuth, notAuth } from '../hoc/authentication.test';

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
    });

    afterEach(cleanup);

    it('renders', () => {
      render(<Index />);
      expect(screen.getByText('Are You Ready ?')).toBeInTheDocument();
      expect(screen.getByText('Search')).toBeInTheDocument();
    });

    describe('search config selection', () => {
      it('only selects an option once', () => {
        render(<Index />);
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
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve({ ticketID: '123abc456' }),
        })
      );
      it('sets the sessionstorage', async () => {
        render(<Index />);

        userEvent.click(screen.getByText('Search'));
        await waitFor(() => expect(global.fetch).toBeCalled());
        expect(sessionStorage.getItem('ticketID')).toBe('123abc456');
      });

      it('sets the ticket in context', async () => {
        const { result } = renderHook(() => useState<Ticket>(new Ticket()));
        renderWithTicket(Index, result);
        userEvent.click(screen.getByText('Search'));
        await waitFor(() => expect(global.fetch).toBeCalled());
        expect(result.current[0].ticketID).toBe('123abc456');
      });
    });
  });
});
