import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulder';
import './App.sass';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
