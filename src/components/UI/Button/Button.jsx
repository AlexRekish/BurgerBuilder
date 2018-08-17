import React from 'react';
import './Button.sass';

const Button = ({ type, clicked, styleType, children, disabled }) => (
  <button
    type={type || 'button'}
    className={['button', `button--${styleType}`].join(' ')}
    onClick={clicked}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
