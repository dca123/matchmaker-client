import '../matchMedia';
import Login from '@/pages/login';
import { signIn } from 'next-auth/client';
import { loadingAuth } from '../hoc/authentication.test';
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
  useRouter() {
    return mockRouter;
  },
}));

describe('/login', () => {
  afterEach(cleanup);
  describe('is not authenticated', () => {
    beforeEach(() => {
      mockAuthenticate({ sessionState: false });
      render(<Login />);
    });

    it('renders', () => {
      expect(screen.getByRole('heading')).toHaveTextContent('Find Me a Lobby');
      expect(screen.getByAltText('Dota 2 Logo')).toBeInTheDocument();
      expect(screen.getByRole('button')).not.toHaveTextContent('Find Lobby');
      expect(screen.getByRole('button')).toHaveTextContent('Login via Discord');
    });
    it('calls discord sign in when button is clicked', () => {
      fireEvent.click(screen.getByText('Login via Discord'));
      (signIn as jest.Mock).mockReturnValue(jest.fn);
      expect(signIn).toHaveBeenCalledWith('discord', { callbackUrl: '/' });
    });
  });

  loadingAuth(Login);
  describe('is authenticated', () => {
    it('pushes /index to the router', () => {
      mockAuthenticate({ sessionState: true, loading: false });
      render(<Login />);
      expect(mockRouter.replace).toBeCalledWith('/');
    });
  });
});
