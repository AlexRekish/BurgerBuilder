import React from 'react';
import PropTypes from 'prop-types';
import './Layout.sass';

const Layout = ({ children }) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{children}</main>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
