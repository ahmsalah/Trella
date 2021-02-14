import { render, screen } from '@testing-library/react';
import DashboardHeader from './DashboardHeader';

test('filteredView is set to true and renders address', () => {
  render(<DashboardHeader loading={false} filteredView address="Cairo" />);
  screen.getByRole('button', { name: /All Shipments/i });
  screen.getByRole('button', { name: /Change Location/i });

  expect(screen.getByText(/Viewing shipments near/i)).toHaveTextContent('Cairo');
});

test('Location button should be disabled while loading', () => {
  render(<DashboardHeader loading filteredView={false} address="Cairo" />);

  expect(screen.getByRole('button', { name: /Location/i })).toBeDisabled();
});
