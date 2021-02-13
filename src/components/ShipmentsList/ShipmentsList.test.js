import { render } from '@testing-library/react';
import ShipmentsList from './ShipmentsList';

const mockShipments = [
  {
    key: 'e857485b-a042-4724-804b-9375b79c80ae',
    numberOfBids: 7,
    commodity: 'فلز',
    vehicleType: 'سوزوكي',
    price: 4104,
    addresses: [
      {
        order: 1,
        key: '4c170859-3962-4e17-812d-5dcfc39ae628',
        latitude: 29.8058694,
        longitude: 32.08891870000002,
        name: 'العاشر من رمضان',
      },
      {
        order: 2,
        key: '9fc1f01a-e382-42e4-a5bc-69e751e969a5',
        latitude: 29.8058694,
        longitude: 32.08891870000002,
        name: 'كينج مريوط',
      },
    ],
  },
];

test('ShipmentsList should render an array of shipments', () => {
  const renderedShipments = render(<ShipmentsList loading={false} list={mockShipments} />);

  expect(renderedShipments).toMatchInlineSnapshot(renderedShipments);
});
