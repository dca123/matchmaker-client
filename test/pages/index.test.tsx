import Index from '@/pages/index';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import client, { Session, signIn } from 'next-auth/client';
import { useRouter, NextRouter, Router } from 'next/router';

jest.mock('next-auth/client');
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
const mockRouter: NextRouter = {
  ...Router,
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isReady: true,
};
const mockSession: Session = {
  expires: '1',
  user: { email: 'a', name: 'Delta', image: 'c' },
};
describe('/index', () => {
  describe('is authenticated', () => {
    beforeEach(() => {
      (client.useSession as jest.Mock).mockReturnValueOnce([mockSession]);
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
    it('pushes roleSelection to router when button is clicked', async () => {
      fireEvent.click(screen.getByText('Find Lobby'));
      expect(mockRouter.push).toHaveBeenCalledWith('/roleSelection');
    });
  });
  describe('is not authenticated', () => {
    beforeEach(() => {
      (client.useSession as jest.Mock).mockReturnValueOnce([false]);
      (useRouter as jest.Mock).mockReturnValue(mockRouter);
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
