import { Ticket } from '@/contexts/ticketContext';
import Lobby from '@/pages/lobby';
import { renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { io } from 'socket.io-client';
import SocketMock from 'socket.io-mock';
import { Player } from '@/layouts/TeamCard';
import usesTicketContext from '../contexts/ticketContext';
import { loadingAuth, notAuth } from '../hoc/authentication';
import {
  cleanup,
  mockRouter,
  mockAuthenticate,
  render,
  renderWithTicket,
  waitFor,
  act,
  screen,
} from '../test-utils';

const player = (playerName: string): Player => ({
  id: playerName,
  ready: false,
});
const playerArray = [
  player('Player 1'),
  player('Player 2'),
  player('Player 3'),
  player('Player 4'),
  player('Player 5'),
  player('Player 6'),
  player('Player 7'),
  player('Player 8'),
  player('Player 9'),
  player('Player 10'),
];
jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));
jest.mock('socket.io-client');

describe('/lobby', () => {
  loadingAuth(Lobby);
  notAuth(Lobby);
  describe('is authenticated', () => {
    let socket: SocketMock;

    beforeEach(() => mockAuthenticate());
    beforeEach(() => {
      socket = new SocketMock();
      (io as jest.Mock).mockReturnValue(socket);
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    afterEach(cleanup);

    usesTicketContext(Lobby);

    describe('socket io connected', () => {
      it('sends connection request', async () => {
        render(<Lobby />);
        await waitFor(() => expect(io).toHaveBeenCalled());
      });

      it('sends connection request with ticket ID', () => {
        const { result } = renderHook(() =>
          useState<Ticket>(new Ticket('123456'))
        );
        renderWithTicket(Lobby, result);
        expect(io).toHaveBeenNthCalledWith(1, `/lobby`, {
          auth: {
            ticket: result.current[0],
          },
        });
      });

      describe('lobby progress events', () => {
        describe('lobbyState', () => {
          it('updates title', async () => {
            act(() => {
              render(<Lobby />);
            });
            act(() => {
              socket.socketClient.emit('lobbyState', 10, 'Brand New Title');
            });
            expect(
              await screen.findByText(/Brand New Title/)
            ).toBeInTheDocument();

            act(() => {
              socket.socketClient.emit(
                'lobbyState',
                10,
                'This is another title'
              );
            });
            await waitFor(() => {
              expect(
                screen.queryByText(/Brand New Title/)
              ).not.toBeInTheDocument();
            });
            expect(
              await screen.findByText(/This is another title/)
            ).toBeInTheDocument();
          });

          it('updates progress', async () => {
            act(() => {
              render(<Lobby />);
            });
            act(() => {
              socket.socketClient.emit('lobbyState', 10, 'Brand New Title');
            });
            expect(await screen.findByRole('progressbar')).toHaveAttribute(
              'aria-valuenow',
              '10'
            );
            act(() => {
              socket.socketClient.emit('lobbyState', 80, 'Brand New Title');
            });
            expect(await screen.findByRole('progressbar')).not.toHaveAttribute(
              'aria-valuenow',
              '10'
            );
            expect(await screen.findByRole('progressbar')).toHaveAttribute(
              'aria-valuenow',
              '80'
            );
          });
        });

        describe('lobbyTimeout', () => {
          it('updates title', async () => {
            act(() => {
              render(<Lobby />);
            });
            act(() => {
              socket.socketClient.emit(
                'lobbyTimeout',
                10,
                'Brand New Title',
                true
              );
            });
            expect(
              await screen.findByText(/Brand New Title/)
            ).toBeInTheDocument();

            act(() => {
              socket.socketClient.emit(
                'lobbyTimeout',
                10,
                'This is another title'
              );
            });
            await waitFor(() => {
              expect(
                screen.queryByText(/Brand New Title/)
              ).not.toBeInTheDocument();
            });
            expect(
              await screen.findByText(/This is another title/)
            ).toBeInTheDocument();
          });

          it('updates progress', async () => {
            act(() => {
              render(<Lobby />);
            });
            act(() => {
              socket.socketClient.emit('lobbyTimeout', 10, 'Brand New Title');
            });
            expect(await screen.findByRole('progressbar')).toHaveAttribute(
              'aria-valuenow',
              '10'
            );
            act(() => {
              socket.socketClient.emit('lobbyTimeout', 80, 'Brand New Title');
            });
            expect(await screen.findByRole('progressbar')).not.toHaveAttribute(
              'aria-valuenow',
              '10'
            );
            expect(await screen.findByRole('progressbar')).toHaveAttribute(
              'aria-valuenow',
              '80'
            );
          });
        });

        describe('playerList', () => {
          it('updates players in the team cards', async () => {
            act(() => {
              render(<Lobby />);
            });
            act(() => {
              socket.socketClient.emit('playerList', playerArray);
            });
            expect(await screen.findAllByText(/Player/)).toHaveLength(10);
          });
        });

        describe('waitingForPlayers', () => {
          it('updates players in the team cards', async () => {
            act(() => {
              render(<Lobby />);
            });
            act(() => {
              socket.socketClient.emit(
                'waitingForPlayers',
                10,
                'Brand New Title',
                playerArray
              );
            });
            await waitFor(() => {
              expect(screen.queryByText(/Brand New Title/)).toBeInTheDocument();
            });
            expect(await screen.findByRole('progressbar')).toHaveAttribute(
              'aria-valuenow',
              '10'
            );
            expect(await screen.findAllByText(/Player/)).toHaveLength(10);
          });
        });
      });
    });
  });
});
