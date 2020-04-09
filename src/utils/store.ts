import { Store, createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { ApplicationState, rootReducer } from './root.reducer';

let middleware: Middleware[] = [thunk, createSagaMiddleware()];

if (__DEV__) {
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
  middleware = [...middleware, reduxImmutableStateInvariant, logger];
}

export default function configureStore(
  initialState?: ApplicationState,
): Store<ApplicationState> {
  if (__DEV__) {
    const reactotron = require('./reactotron.config').default;
    return reactotron.createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware),
    );
  }
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
