import Index from '@/pages/index';
import { render, screen } from '@testing-library/react';
import client, { Session } from 'next-auth/client';

jest.mock('next-auth/client');
describe('App', () => {
  it('renders without crashing', () => {
    const mockSession: Session = {
      expires: '1',
      user: { email: 'a', name: 'Delta', image: 'c' },
    };
    (client.useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
    render(<Index />);
    expect(
      screen.getByRole('heading', { name: 'Find Me a Lobby' })
    ).toBeInTheDocument();
  });
});
