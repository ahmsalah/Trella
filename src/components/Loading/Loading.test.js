import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('Renders loading animation when loading is set to true', () => {
  const { rerender } = render(<Loading isLoading />);
  screen.getByLabelText('animation');

  rerender(<Loading isLoading={false} />);
  expect(screen.queryByLabelText('animation')).toBeNull();
});
