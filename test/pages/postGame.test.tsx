import PostGame from '@/pages/postGame';
import {
  mockAuthenticate,
  cleanup,
  render,
  screen,
  fireEvent,
  mockRouter,
} from '../test-utils';

jest.mock('next/router', () => ({
  useRouter() {
    return mockRouter;
  },
}));
describe('/postgame', () => {
  beforeEach(() => {
    mockAuthenticate();
    render(<PostGame />);
  });

  afterEach(cleanup);

  it('renders', () => {
    expect(screen.getByText(/ *Victory/)).toBeInTheDocument();
    expect(screen.getByText('vs')).toBeInTheDocument();
    expect(screen.queryAllByAltText(/Hero */)).toHaveLength(10);
    expect(screen.getByRole('button')).toHaveTextContent('Play Again');
  });

  it('pushes roleSelection to router when button is clicked', () => {
    fireEvent.click(screen.getByText('Play Again'));
    expect(mockRouter.push).toHaveBeenCalledWith('/roleSelection');
  });
});
