import React from 'react';
import './Layout.sass';

const layout = props => (
  <React.Fragment>
    <div>
      Toolbar,
      SideDrawer,
      Backdrop
    </div>
    <main className="main-content">
      { props.children }
    </main>
  </React.Fragment>
);

export default layout;
