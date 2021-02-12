import { all } from 'redux-saga/effects';
import shipmentsReducer, { watchShipments } from './shipments.feature';

/**
 * The way how redux store is structured here is by using the ducks pattern,
 *  (all Redux logic for a feature in a single file).
 *  It is recommended by redux style guide, read more about it there
 *  https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */

export function* rootSaga() {
  yield all([watchShipments()]);
}

export const rootReducer = {
  shipments: shipmentsReducer,
};
