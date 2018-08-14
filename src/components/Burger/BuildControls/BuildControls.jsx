import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.sass';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = ({
  onAddIngredient,
  onRemoveIngredient,
  ingredients,
  price,
  purchasable,
  purchased
}) => (
  <div className="build-controls">
    <p>
      Current Price:
      <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        onAddIngredient={() => onAddIngredient(ctrl.type)}
        onRemoveIngredient={() => onRemoveIngredient(ctrl.type)}
        enabled={ingredients[ctrl.type] > 0}
      />
    ))}
    <button
      type="button"
      className="build-controls__order-button"
      disabled={!purchasable}
      onClick={purchased}
    >
      order now
    </button>
  </div>
);

export default BuildControls;
