import { createAction, createReducer } from '@reduxjs/toolkit';
import { takeLatest, call, put } from 'redux-saga/effects';
import API from 'config/axiosConfig';
import snackbar from 'utils/snackbar';

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
    /**
     * if loadShipments action was dispatced without payload object ({lat, lng}), so that payload = undefined
     * then fetchShipments would be called without params to fetch all shipments
     */
    const resp = yield call(fetchShipments, payload ?? {});
    yield put(receivedShipments(resp.data));
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
