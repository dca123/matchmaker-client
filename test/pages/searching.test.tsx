import '../matchMedia';
import Searching from '@/pages/searching';
import { renderHook } from '@testing-library/react-hooks';
import { Ticket } from '@/contexts/ticketContext';
import { useState } from 'react';
import { io } from 'socket.io-client';
import SocketMock from 'socket.io-mock';
import { waitFor } from '@testing-library/react';
import { useSession } from '@/libs/session';
import usesTicketContext from '../contexts/ticketContext';
import {
  cleanup,
  renderWithTicket,
  mockRouter,
  render,
  screen,
  act,
} from '../test-utils';
import { loadingAuth, notAuth } from '../hoc/authentication';

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));
jest.mock('socket.io-client');
jest.mock('@/libs/session', () => ({
  useSession: jest.fn(),
}));
describe('/searching', () => {
  loadingAuth(Searching);
  notAuth(Searching);
  describe('is authenticated', () => {
    let socket: SocketMock;

    beforeEach(() => {
      (useSession as jest.Mock).mockImplementation(() => [
        {
          id: 'a',
          steamID: 'Delta',
          imageUrl: 'c',
        },
        false,
      ]);
    });
    beforeEach(() => {
      jest.useFakeTimers();
      socket = new SocketMock();
      (io as jest.Mock).mockReturnValue(socket);
    });
    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
      jest.restoreAllMocks();
    });
    afterEach(cleanup);

    usesTicketContext(Searching);

    describe('socket io connected', () => {
      it('sends connection request', async () => {
        render(<Searching />);
        await waitFor(() => expect(io).toHaveBeenCalled());
      });

      it('sends connection request with ticket ID', () => {
        const { result } = renderHook(() =>
          useState<Ticket>(new Ticket('123456'))
        );
        renderWithTicket(Searching, result);
        expect(io).toHaveBeenCalledWith(`/searching`, {
          auth: {
            ticket: result.current[0],
          },
        });
      });

      it('disconnects on component unmount', async () => {
        const disconnectSpy = jest.spyOn(io(), 'disconnect');
        const { unmount } = render(<Searching />);
        io().connected = true;
        unmount();
        expect(disconnectSpy).toHaveBeenCalledTimes(1);
      });

      describe('when lobbyFound is received', () => {
        it('shows toast and dismisses', async () => {
          act(() => {
            render(<Searching />);
          });
          act(() => {
            socket.socketClient.emit('lobbyFound');
          });
          expect(await screen.findByText(/Game Found/)).toBeInTheDocument();
          await waitFor(() => {
            expect(screen.queryByText(/Game Found/)).not.toBeInTheDocument();
          });
        });

        it('disconnects from socket and pushes /lobby to router', async () => {
          const disconnectSpy = jest.spyOn(io(), 'disconnect');
          render(<Searching />);
          socket.socketClient.emit('lobbyFound');
          await waitFor(() => expect(disconnectSpy).toHaveBeenCalledTimes(1));
          await waitFor(() =>
            expect(mockRouter.push).toHaveBeenNthCalledWith(1, '/lobby')
          );
        });

        it('disconnects from socket only once when component unmount', async () => {
          const disconnectSpy = jest.spyOn(io(), 'disconnect');
          const { unmount } = render(<Searching />);
          socket.socketClient.emit('lobbyFound');
          unmount();
          jest.runAllTimers();
          await waitFor(() => expect(disconnectSpy).toHaveBeenCalledTimes(1));
        });
      });
    });
  });
});
