import React from 'react';
import './Button.sass';

const Button = ({ clicked, type, children }) => (
  <button type="button" className={['button', `button--${type}`].join(' ')} onClick={clicked}>
    {children}
  </button>
);

export default Button;
