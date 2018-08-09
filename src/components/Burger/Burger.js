import React from 'react';
import './Burger.sass';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => [...Array(props.ingredients[igKey])]
      .map((_, index) => <BurgerIngredient key={igKey + index} type={igKey} />))
    .reduce((arr, el) => arr.concat(el), []);
  if (!transformedIngredients.length) transformedIngredients = <p>Please, start adding the ingredients!</p>;
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
};

export default burger;
