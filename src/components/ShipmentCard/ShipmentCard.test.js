import { render, screen } from '@testing-library/react';
import ShipmentCard from './ShipmentCard';

/**
 * This is so that if we have a long list of shipments
 * Only expanding a shipment card would load its children including the (embedded map)
 */

test('ShipmentCard should not render map if it is not expanded by default', () => {
  render(<ShipmentCard commodity="wood" />);
  expect(screen.queryByTitle(/map/i)).toBeNull();
});

test('ShipmentCard should render map if it is expanded by default', () => {
  render(<ShipmentCard commodity="wood" defaultExpanded />);
  screen.getByTitle(/map/i);
});
