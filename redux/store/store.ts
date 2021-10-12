import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducer/root-reducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../saga/root-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const sagaMiddleware = createSagaMiddleware();

export default function configStore() {
  const middlewares = [sagaMiddleware];

  // Redux dev tool chrome extension
  const reduxDevToolEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const store = createStore(RootReducer, reduxDevToolEnhancer);

  sagaMiddleware.run(RootSaga);
  
  return store;
}