import Index from '@/pages/index';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  mockAuthenticate,
  mockRouter,
} from '../test-utils';

jest.mock('next-auth/client');
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('/index', () => {
  describe('is authenticated', () => {
    beforeEach(() => {
      mockAuthenticate();
      (useRouter as jest.Mock).mockReturnValue(mockRouter);
      render(<Index />);
    });

    afterEach(cleanup);

    it('renders', () => {
      expect(screen.getByRole('heading')).toHaveTextContent('Find Me a Lobby');
      expect(screen.getByAltText('Dota 2 Logo')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Find Lobby');
      expect(screen.getByRole('button')).not.toHaveTextContent(
        'Login via Discord'
      );
    });
    it('pushes roleSelection to router when button is clicked', () => {
      fireEvent.click(screen.getByText('Find Lobby'));
      expect(mockRouter.push).toHaveBeenCalledWith('/roleSelection');
    });
  });
  describe('is not authenticated', () => {
    beforeEach(() => {
      mockAuthenticate(false);
      render(<Index />);
    });

    afterEach(cleanup);

    it('renders', () => {
      expect(screen.getByRole('heading')).toHaveTextContent('Find Me a Lobby');
      expect(screen.getByAltText('Dota 2 Logo')).toBeInTheDocument();
      expect(screen.getByRole('button')).not.toHaveTextContent('Find Lobby');
      expect(screen.getByRole('button')).toHaveTextContent('Login via Discord');
    });
    it('calls discord sign in when button is clicked', () => {
      fireEvent.click(screen.getByText('Login via Discord'));
      (signIn as jest.Mock).mockReturnValue(jest.fn);
      expect(signIn).toHaveBeenCalledWith('discord');
    });
  });
});
