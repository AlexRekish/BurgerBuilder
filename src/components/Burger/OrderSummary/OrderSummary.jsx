import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = ({ ingredients, onOrderContinued, onOrderCancelled, price }) => {
  const ingredientSummary = Object.keys(ingredients).map(ingKey => {
    if (!ingredients[ingKey]) return null;
    return (
      <li key={ingKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>
        <span> : </span>
        {ingredients[ingKey]}
      </li>
    );
  });
  const listStyle = {
    textAlign: 'left',
    listStyle: 'none'
  };
  return (
    <React.Fragment>
      <h3>Your order:</h3>
      <p>A delicious burger with: </p>
      <ul style={listStyle}>{ingredientSummary}</ul>
      <p>
        <strong>
          {'Total price: '}
          {price.toFixed(2)}
        </strong>
      </p>
      <p>Continue to checkout?</p>
      <Button type="danger" clicked={onOrderCancelled}>
        Cancel
      </Button>
      <Button type="success" clicked={onOrderContinued}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
