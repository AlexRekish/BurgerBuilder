import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulder';
import './App.sass';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './containers/Checkout/Checkout';
import ContactData from './containers/ContactData/ContactData';
import Orders from './containers/Orders/Orders';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <ToastContainer />
        <Layout>
          <Switch>
            <Route path="/builder" component={BurgerBuilder} />
            <Route path="/checkout/contact-data" component={ContactData} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Redirect to="/builder" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
