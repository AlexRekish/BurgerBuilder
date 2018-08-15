import React from 'react';
import './NavigationItem.sass';

const NavigationItem = ({ link, children, active }) => (
  <li className="navigation__list-item">
    <a
      className={active ? 'navigation__link navigation__link--active' : 'navigation__link'}
      href={link}
    >
      {children}
    </a>
  </li>
);

export default NavigationItem;
