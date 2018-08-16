import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationList.sass';

const NavigationList = () => (
  <ul className="navigation__list">
    <NavigationItem link="/builder">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default NavigationList;
