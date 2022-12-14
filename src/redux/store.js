import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user', 'categories'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, enhancer);

export const persistor = persistStore(store);
