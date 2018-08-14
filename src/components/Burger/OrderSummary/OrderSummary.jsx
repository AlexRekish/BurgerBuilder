import React from 'react';

const OrderSummary = ({ ingredients }) => {
  const ingredientSummary = Object.keys(ingredients).map(ingKey => (
    <li key={ingKey}>
      <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>
      <span> : </span>
      {ingredients[ingKey]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your order:</h3>
      <p>A delicious burger with: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </React.Fragment>
  );
};

export default OrderSummary;
