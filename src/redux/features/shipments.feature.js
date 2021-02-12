import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import API from 'config/axiosConfig';
import snackbar from 'utils/snackbar';
import { initialLocation } from 'config/constants';

/**
 * The way how redux store is structured here is by using the ducks pattern,
 *  (all Redux logic for a feature in a single file).
 *  It is recommended by redux style guide, read more about it there
 *  https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */

/* API calls */
const fetchShipments = params => API.get('/marketplace', { params });

/* Actions */
export const loadShipments = createAction('shipments/loadShipments');
export const receivedShipments = createAction('shipments/receivedShipments');

/* Initial State */
const initialState = {
  loading: false,
  list: [],
};

/* Reducer */
export default createReducer(initialState, {
  [loadShipments]: state => {
    return {
      ...state,
      loading: true,
    };
  },
  [receivedShipments]: (state, action) => {
    return {
      ...state,
      loading: false,
      list: action.payload,
    };
  },
});

/* Sagas */
function* handleLoadShipments({ payload }) {
  try {
    // if loadShipments action was dispatced without payload object ({lat, lng}), so that payload = undefined
    // then fetchShipments would be called without params to fetch all shipments
    const { data } = yield call(fetchShipments, payload ?? {});

    // -- Changing all shipments pickup lat & lng to Cairo's lat & lng --
    const { lat: latitude, lng: longitude } = initialLocation;
    // Destructuring pickup & destination from addresses array,
    // then updating pickup, and leaving destination the same
    const shipments = data.map(({ addresses: [pickup, destination], ...shipment }) => ({
      ...shipment,
      addresses: [{ ...pickup, latitude, longitude }, destination],
    }));

    yield put(receivedShipments(shipments));
  } catch (error) {
    /**
     * All errors are sent to sentry via axios interceptors
     * So we might do something with this error specifically here
     */
    snackbar.error('Oops, Something went wrong while fetching shipments');
  }
}

/* Feature root saga */
export function* watchShipments() {
  yield takeLatest(loadShipments.toString(), handleLoadShipments);
}
