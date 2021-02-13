import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('Layout renders with children', () => {
  render(
    <Layout>
      <div>test</div>
    </Layout>,
  );
  screen.getByText(/test/i);
});
