import {
  render,
  screen,
  cleanup,
  mockAuthenticate,
  mockRouter,
} from '../test-utils';

export const loadingAuth = (Component: React.FunctionComponent): void => {
  describe('is loading authentication', () => {
    afterEach(cleanup);
    it('shows spinner', () => {
      mockAuthenticate({ sessionState: false, loading: true });
      render(<Component />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
};

export const notAuth = (Component: React.FunctionComponent): void => {
  describe('is not authenticated', () => {
    afterEach(cleanup);
    it('pushes index to router', () => {
      mockAuthenticate({ sessionState: false });
      render(<Component />);
      expect(mockRouter.replace).toHaveBeenCalledWith('/');
    });
  });
};
