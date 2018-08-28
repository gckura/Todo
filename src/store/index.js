import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import todoApp from '../reducers';
import visibilityFilter from '../reducers/visibilityFilter';
import logger from 'redux-logger';

export default function createStore() {
  return reduxCreateStore(
    todoApp,
    savedState ? savedState : todoApp(undefined, { type: 'Init' }),
    applyMiddleware(logger, storageMiddleware)
  );
}

const savedState = JSON.parse(localStorage.getItem('app-state'));

export var maxId = savedState ? savedState.todos.length : 0;

const storageMiddleware = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
};
