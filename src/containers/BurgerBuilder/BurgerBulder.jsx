import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { Action } from '../../store/actions/actions';

const PRICES = {
  salad: 0.4,
  bacon: 0.9,
  cheese: 0.6,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    purchased: false
  };

  componentDidMount() {
    const { initIngredients } = this.props;
    initIngredients();
  }

  checkPurchasable = ingredients => {
    const sum = _.values(ingredients).reduce((arr, next) => arr + next);
    return sum > 0;
  };

  changePurchased = () => {
    this.setState({ purchased: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchased: false });
  };

  continuePurchaseHandler = () => {
    const { history } = this.props;
    history.push('/checkout');
  };

  render() {
    const { purchased } = this.state;
    const { onAddIngredient, onDeleteIngredient, ingredients, price } = this.props;
    return ingredients ? (
      <React.Fragment>
        <Modal purchased={purchased} canceled={this.cancelPurchaseHandler}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            onOrderCancelled={this.cancelPurchaseHandler}
            onOrderContinued={this.continuePurchaseHandler}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={price}
          ingredients={ingredients}
          onAddIngredient={onAddIngredient}
          onRemoveIngredient={onDeleteIngredient}
          purchasable={this.checkPurchasable(ingredients)}
          purchased={this.changePurchased}
        />
      </React.Fragment>
    ) : null;
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  price: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  onAddIngredient: ingType => dispatch(Action.addIngredient(ingType, PRICES[ingType])),
  onDeleteIngredient: ingType => dispatch(Action.deleteIngredient(ingType, PRICES[ingType])),
  initIngredients: () => dispatch(Action.initIngredients())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerBuilder);
