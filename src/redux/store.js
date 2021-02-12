import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from './features';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;

/**
 * The way how redux store is structured here is by using the ducks pattern,
 *  (all Redux logic for a feature in a single file).
 *  It is recommended by redux style guide, read more about it there
 *  https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks
 */
