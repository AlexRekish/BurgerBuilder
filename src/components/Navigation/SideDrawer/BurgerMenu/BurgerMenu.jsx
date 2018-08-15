import React from 'react';
import './BurgerMenu.sass';

const BurgerMenu = ({ clicked }) => (
  <button type="button" onClick={clicked} className="burger-button">
    <div className="drawer-toggle">
      <div />
      <div />
      <div />
    </div>
  </button>
);

export default BurgerMenu;
