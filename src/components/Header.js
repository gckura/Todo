import React from 'react';
import FilterLink from '../containers/FilterLink';
import '../styles/Header.css';

const Header = () => (
  <div className="a__header">
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </div>
);

export default Header;
