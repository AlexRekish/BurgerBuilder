import React from 'react';
import './Toolbar.sass';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import BurgerMenu from '../SideDrawer/BurgerMenu/BurgerMenu';

const Toolbar = ({ sideDrawerToggler }) => (
  <header className="toolbar">
    <BurgerMenu clicked={sideDrawerToggler} />
    <Logo height="80%" />
    <nav>
      <NavigationList />
    </nav>
  </header>
);

export default Toolbar;
