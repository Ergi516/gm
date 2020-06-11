import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index';
import saga from './sagas/sagas';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  compose(
      applyMiddleware(sagaMiddleware),
      composeWithDevTools(),
  ),
);

sagaMiddleware.run(saga);