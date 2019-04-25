import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import example from './example';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  example
});

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
