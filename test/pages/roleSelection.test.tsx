import RoleSelection from '@/pages/roleSelection';
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
  loadingAuth(RoleSelection);
  notAuth(RoleSelection);

  describe('is authenticated', () => {
    beforeEach(() => {
      mockAuthenticate();
      render(<RoleSelection />);
    });

    afterEach(cleanup);

    it('renders', () => {
      expect(screen.getByRole('heading')).toHaveTextContent(
        'Select Your Roles'
      );
      expect(screen.getByRole('button')).toHaveTextContent('Search');
      roleSelectionNames.forEach((roleName) => {
        expect(screen.getByText(roleName)).toBeInTheDocument();
      });
    });

    it('pushes roleSelection to router when button is clicked', () => {
      fireEvent.click(screen.getByText('Search'));
      expect(mockRouter.push).toHaveBeenCalledWith('/searching');
    });

    describe('changes text color for only clicked role', () => {
      roleSelectionNames.forEach((roleName) => {
        it(`${roleName}`, () => {
          expect(screen.getByText(roleName)).toHaveStyle(`color: white`);
          fireEvent.click(screen.getByText(roleName));
          expect(screen.getByText(roleName)).toHaveStyle(`color: pink`);

          roleSelectionNames
            .filter((filteredRoleName) => filteredRoleName !== roleName)
            .forEach((filteredRoleName) => {
              expect(screen.getByText(filteredRoleName)).toHaveStyle(
                `color: white`
              );
            });
        });
      });
    });
  });
});
