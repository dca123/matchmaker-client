import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

const mockRouter: NextRouter = {
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
const Providers = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <RouterContext.Provider value={{ ...mockRouter }}>
      {children}
    </RouterContext.Provider>
  );
};
export * from '@testing-library/react';
export const customRender = (
  ui: React.ReactElement,
  options: RenderOptions = {}
): RenderResult =>
  render(ui, {
    wrapper: Providers as React.ComponentType,
    ...options,
  });
