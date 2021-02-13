import { render, screen } from '@testing-library/react';
import CardWrapper from './CardWrapper';

test('CardWrapper renders without children if it is not expanded by default', () => {
  render(
    <CardWrapper title="Card title" TransitionProps={{ mountOnEnter: true }}>
      <div>test expanded</div>
    </CardWrapper>,
  );
  expect(screen.queryByText(/test expanded/i)).toBeNull();
});

test('CardWrapper renders with children if it is expanded by default', () => {
  render(
    <CardWrapper title="Card title" TransitionProps={{ mountOnEnter: true }} defaultExpanded>
      <div>test expanded</div>
    </CardWrapper>,
  );
  screen.getByText(/test expanded/i);
});
