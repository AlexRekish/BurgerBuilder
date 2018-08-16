import React, { Component } from 'react';
import _ from 'lodash';
import { toast } from 'react-toastify';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { saveOrder, getIngredients } from '../../services/orderService';

const PRICES = {
  salad: 0.4,
  bacon: 0.9,
  cheese: 0.6,
  meat: 1.2
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchased: false
  };

  async componentDidMount() {
    const { data: ingredients } = await getIngredients();
    this.setState({ ingredients });
  }

  changePurchasable = ingredients => {
    const sum = _.values(ingredients).reduce((arr, next) => arr + next);
    return sum > 0;
  };

  changePurchased = () => {
    this.setState({ purchased: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchased: false });
  };

  continuePurchaseHandler = async () => {
    const { ingredients, totalPrice: price } = this.state;
    const order = {
      ingredients,
      price: price.toFixed(2),
      customer: {
        name: 'Alex',
        address: {
          street: 'Test street 1',
          zipCode: '12345',
          country: 'Belarus'
        },
        email: 'test@test.com',
        deliveryMethod: 'fastest'
      }
    };
    try {
      this.setState({ purchased: false });
      await saveOrder(order);
      toast('Order send successfully!');
    } catch (err) {
      this.setState({ purchased: true });
    }
  };

  addIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    const newIngredients = { ...ingredients };
    newIngredients[type]++;

    const newPrice = totalPrice + PRICES[type];
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
      purchasable: this.changePurchasable(newIngredients)
    });
  };

  removeIngredientHandler = type => {
    const { ingredients, totalPrice } = this.state;
    if (!ingredients[type]) return;

    const newIngredients = { ...ingredients };
    newIngredients[type]--;

    const newPrice = totalPrice - PRICES[type];
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
      purchasable: this.changePurchasable(newIngredients)
    });
  };

  render() {
    const { ingredients, totalPrice, purchasable, purchased } = this.state;
    return ingredients ? (
      <React.Fragment>
        <Modal purchased={purchased} canceled={this.cancelPurchaseHandler}>
          <OrderSummary
            ingredients={ingredients}
            price={totalPrice}
            onOrderCancelled={this.cancelPurchaseHandler}
            onOrderContinued={this.continuePurchaseHandler}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={totalPrice}
          ingredients={ingredients}
          onAddIngredient={this.addIngredientHandler}
          onRemoveIngredient={this.removeIngredientHandler}
          purchasable={purchasable}
          purchased={this.changePurchased}
        />
      </React.Fragment>
    ) : null;
  }
}

export default BurgerBuilder;
