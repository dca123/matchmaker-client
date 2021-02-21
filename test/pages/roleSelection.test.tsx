import Index from '@/pages/index';
import { fireEvent } from '@testing-library/react';
import {
  screen,
  cleanup,
  render,
  mockAuthenticate,
  mockRouter,
} from '../test-utils';
import { loadingAuth, notAuth } from './authTests';

const roleSelectionNames = [
  'Hard Support',
  'Soft Support',
  'Offlane',
  'Midlane',
  'Hard Carry',
];

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));

describe('/roleSelection', () => {
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
      roleSelectionNames.forEach((roleName) => {
        expect(screen.getByText(roleName)).toBeInTheDocument();
      });
    });

    it('pushes roleSelection to router when button is clicked', () => {
      fireEvent.click(screen.getByText('Search'));
      expect(mockRouter.push).toHaveBeenCalledWith('/searching');
    });
  });
});
