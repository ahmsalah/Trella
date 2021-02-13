import { runSaga } from 'redux-saga';
import * as shipments from './shipments.feature';
import shipmentsReducer, {
  loadShipments,
  receivedShipments,
  handleLoadShipments,
  initialState,
} from './shipments.feature';

test('Load shipments', () => {
  expect(
    shipmentsReducer(initialState, {
      type: loadShipments.toString(),
    }),
  ).toEqual({
    loading: true,
    list: [],
  });
});

test('Receive shipments', () => {
  expect(
    shipmentsReducer(initialState, {
      type: receivedShipments.toString(),
      payload: ['shipment1', 'shipment2'],
    }),
  ).toEqual({
    loading: false,
    list: ['shipment1', 'shipment2'],
  });
});

test('should load shipments and handle them in case of success', async () => {
  const dispatchedActions = [];

  const mockedShipments = ['shipment1', 'shipment2'];
  shipments.fetchShipments = jest.fn(() => Promise.resolve(mockedShipments));

  const fakeStore = {
    dispatch: action => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleLoadShipments);
});
