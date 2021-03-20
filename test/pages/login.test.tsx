import '../matchMedia';
import Login from '@/pages/login';
import { signIn, useSession } from '@/libs/session';
import { loadingAuth } from '../hoc/authentication';
import { render, screen, fireEvent, cleanup, mockRouter } from '../test-utils';

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));
jest.mock('@/libs/session', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
}));

describe('/login', () => {
  afterEach(cleanup);
  describe('is not authenticated', () => {
    beforeEach(() => {
      (useSession as jest.Mock).mockImplementation(() => [false, false]);
      render(<Login />);
    });

    it('renders', () => {
      expect(screen.getByRole('heading')).toHaveTextContent('Find Me a Lobby');
      expect(screen.getByAltText('Dota 2 Logo')).toBeInTheDocument();
      expect(screen.getByRole('button')).not.toHaveTextContent('Find Lobby');
      expect(screen.getByRole('button')).toHaveTextContent('Login via Steam');
    });
    it('calls steam sign in when button is clicked', () => {
      fireEvent.click(screen.getByText('Login via Steam'));
      expect(signIn).toHaveBeenCalled();
    });
  });

  loadingAuth(Login);
  describe('is authenticated', () => {
    it('pushes /index to the router', () => {
      (useSession as jest.Mock).mockImplementation(() => [
        {
          id: 'a',
          steamID: 'Delta',
          imageUrl: 'c',
        },
        false,
      ]);
      render(<Login />);
      expect(mockRouter.replace).toBeCalledWith('/');
    });
  });
});
