import { render, screen } from '@testing-library/react';
import StatCard from './StatCard';

test('StatCard renders with props', () => {
  render(<StatCard title="stat-title" value="stat-value" />);
  screen.getByText('stat-title');
  screen.getByText('stat-value');
});

test('StatCard is a button when onClick is passed into it', () => {
  render(<StatCard title="stat-title" value="stat-value" onClick={jest.fn()} />);
  screen.getByRole('button');
});
