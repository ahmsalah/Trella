import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

test('modal shows the children and a close button', () => {
  const handleClose = jest.fn();

  render(
    <Modal open onClose={handleClose}>
      <div>test</div>
    </Modal>,
  );
  screen.getByText(/test/i);

  fireEvent.click(screen.getByText(/Close/i));

  expect(handleClose).toHaveBeenCalledTimes(1);
});
