import React from 'react';
// import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.sass';

const Burger = props => {
  const { ingredients } = props;
  let transformedIngredients = Object.keys(ingredients)
    .map(ing =>
      [...Array(ingredients[ing])].map((_a, i) => <BurgerIngredient key={ing + i} type={ing} />)
    )
    .reduce((arr, subArr) => arr.concat(subArr));
  if (!transformedIngredients.length)
    transformedIngredients = <p>Please start adding ingredients!</p>;
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
