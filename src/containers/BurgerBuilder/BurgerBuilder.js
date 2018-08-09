import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  meat: 1.3,
  salad: 0.4,
  bacon: 0.9,
  cheese: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  }

  addIngredientHandler = (type) => {
    const oldIngredients = this.state.ingredients[type];
    const oldPrice = this.state.totalPrice;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldIngredients + 1;
    this.setState({ ingredients: updatedIngredients, totalPrice: oldPrice + INGREDIENT_PRICE[type] });
    this.checkPurchasable(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldIngredients = this.state.ingredients[type];
    if (oldIngredients <= 0) return;
    let oldPrice = this.state.totalPrice;
    let updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldIngredients - 1;
    oldPrice -= INGREDIENT_PRICE[type];
    this.setState({ ingredients: updatedIngredients, totalPrice: oldPrice });
    this.checkPurchasable(updatedIngredients);
  }

  checkPurchasable = (ingredients) => {
    const ingredientsCount =  Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, ig) => sum + ig, 0);
    this.setState({ purchasable: ingredientsCount > 0});
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      }

    return (
      <React.Fragment>
        <Burger
          ingredients= {this.state.ingredients}
        />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </React.Fragment>
    );
  };
}

export default BurgerBuilder;
