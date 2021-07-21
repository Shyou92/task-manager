import { createStore, compose } from 'redux';
import { rootReducers } from './reducers/index.js';

const store = createStore(
  rootReducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
