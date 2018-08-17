import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.sass';

const CheckoutSummary = ({ ingredients, onCancel, onContinue }) => (
  <div className="checkout">
    <h1>We hope it tastes well!</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button styleType="danger" clicked={onCancel}>
      Cancel
    </Button>
    <Button styleType="success" clicked={onContinue}>
      Continue
    </Button>
  </div>
);

export default CheckoutSummary;
