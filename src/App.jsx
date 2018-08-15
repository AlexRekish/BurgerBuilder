import React, { Component } from 'react';
import './App.sass';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulder';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
