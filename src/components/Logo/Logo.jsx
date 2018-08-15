import React from 'react';
import './Logo.sass';
import burgerLogo from '../../assets/img/burger-logo.png';

const Logo = ({ height }) => (
  <div className="logo" style={{ height: `${height}` }}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default Logo;
