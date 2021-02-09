import { render, RenderResult, RenderOptions } from '@testing-library/react';

const Providers = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return children;
};
const customRender = (
  ui: React.ReactElement,
  options: RenderOptions = {},
): RenderResult =>
  render(ui, {
    wrapper: Providers as React.ComponentType,
    ...options,
  });

export default customRender;
