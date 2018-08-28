import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Header from './Header';
import '../styles/App.css';

const App = () => (
  <div className="a__app">
    <h1>Todo</h1>
    <Header />
    <div className="b__todo">
      <AddTodo />
      <VisibleTodoList />
    </div>
  </div>
);
export default App;
