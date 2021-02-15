import Searching from '@/pages/searching';
import { mockAuthenticate, cleanup, render, screen } from '../test-utils';

describe('/searching', () => {
  beforeEach(() => {
    mockAuthenticate();
    render(<Searching />);
  });

  afterEach(cleanup);

  it('renders', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Finding Game');
    expect(screen.getByAltText('Juggernaut Running')).toBeInTheDocument();
    expect(screen.queryByRole('button')).toHaveTextContent('Cancel');
  });
});
