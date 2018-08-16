import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.sass';

const NavigationItem = ({ link, children }) => (
  <li className="navigation__list-item">
    <NavLink className="navigation__link" to={link} activeClassName="navigation__link--active">
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;
