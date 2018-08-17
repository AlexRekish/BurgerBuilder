import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
  continuePurchaseHandler = async () => {
    const { history } = this.props;
    history.push('/checkout/contact-data');
  };

  cancelPurchaseHandler = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { ingredients } = this.props;
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

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  price: state.totalPrice
});

export default connect(mapStateToProps)(Checkout);
