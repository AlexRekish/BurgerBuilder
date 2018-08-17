import React from 'react';
import './Input.sass';

const Input = ({ name, label, onChange, value, placeholder, type, error }) => (
  <div className="custom-input__wrapper">
    <label htmlFor={name}>
      {label}
      {':'}
    </label>
    <input
      type={type}
      className="custom-input"
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
    {error && <small className="custom-input__error">{error}</small>}
  </div>
);

export default Input;
