import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationList.sass';

const NavigationList = () => (
  <ul className="navigation__list">
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationList;
