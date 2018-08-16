import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  continuePurchaseHandler = async () => {
    const { history, location } = this.props;
    history.push('/checkout/contact-data', location.state);
  };

  cancelPurchaseHandler = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { location } = this.props;
    const { ingredients } = location.state;
    return ingredients ? (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          onContinue={this.continuePurchaseHandler}
          onCancel={this.cancelPurchaseHandler}
        />
      </div>
    ) : null;
  }
}

export default Checkout;
