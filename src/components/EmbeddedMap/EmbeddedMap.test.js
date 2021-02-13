import { render, screen } from '@testing-library/react';
import EmbeddedMap from './EmbeddedMap';

test('should render map iframe without crashing', () => {
  render(<EmbeddedMap mapParams={{ origin: '33,44', destination: '13,15' }} />);
  screen.getByTitle('map');
});
