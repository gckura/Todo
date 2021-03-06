import { maxId } from '../store';

let nextTodoId = maxId;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};
