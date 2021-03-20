import { useSession } from '@/libs/session';
import { render, screen, mockRouter } from '../test-utils';

export const loadingAuth = (Component: React.FunctionComponent): void => {
  describe('is loading session', () => {
    beforeEach(() =>
      (useSession as jest.Mock).mockImplementation(() => [undefined, true])
    );
    it('shows spinner', () => {
      render(<Component />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });
};

export const notAuth = (Component: React.FunctionComponent): void => {
  describe('is not authenticated', () => {
    beforeEach(() =>
      (useSession as jest.Mock).mockImplementation(() => [undefined, false])
    );
    it('pushes index to router', () => {
      render(<Component />);
      expect(mockRouter.replace).toHaveBeenCalledWith('/login');
    });
  });
};
