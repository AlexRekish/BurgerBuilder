import React from 'react';
import './Order.sass';

const Order = ({ ingredients, price }) => {
  const orderIngredients = Object.keys(ingredients).map(ing => ({
    name: ing,
    amount: ingredients[ing]
  }));
  return (
    <div className="order">
      <p>
        {'Ingredients: '}
        {orderIngredients.map(ing => (
          <span
            key={ing.name}
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '1px solid #ccc',
              padding: '5px'
            }}
          >
            {`${ing.name} (${ing.amount})`}
          </span>
        ))}
      </p>
      <p style={{ fontWeight: 'bold' }}>
        {'Total price: USD '}
        {price}
      </p>
    </div>
  );
};

export default Order;
