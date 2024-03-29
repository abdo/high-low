import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers =
  global.window && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = createStore(
  rootReducer,
  composeEnhancers?.(applyMiddleware(...middleware)),
);

export default store;
