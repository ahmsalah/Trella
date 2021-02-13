import { render, screen } from '@testing-library/react';
import FlexBox from './FlexBox';

test('FlexBox renders with children', () => {
  render(
    <FlexBox>
      <div>test</div>
    </FlexBox>,
  );
  screen.getByText(/test/i);
});
