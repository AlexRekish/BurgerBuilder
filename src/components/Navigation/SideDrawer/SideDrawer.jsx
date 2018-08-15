import React from 'react';
import './SideDrawer.sass';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = ({ open, closed }) => (
  <React.Fragment>
    <Backdrop open={open} canceled={closed} />
    <div className={`side-drawer side-drawer${open ? '--open' : '--close'}`}>
      <Logo height="11%" />
      <nav>
        <NavigationList />
      </nav>
    </div>
  </React.Fragment>
);

export default SideDrawer;
