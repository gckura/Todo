import React, { PropTypes } from 'react';

const Link = ({ children, onClick }) => (
  <a
    onClick={e => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </a>
);

export default Link;
