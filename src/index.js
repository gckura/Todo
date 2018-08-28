import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import todo from './reducers';
import App from './components/App';
import { setVisibilityFilter } from './actions';
import createStore from './store';

import { addTodo, toggleTodo } from './actions';

let store = createStore(todo);

store.dispatch(setVisibilityFilter('SHOW_ALL'));
console.log('ステイト');
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
