import React from 'react';
import './BuildControls.sass';

import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Salad', type: 'salad'},
]

const buildControls = (props) => (
  <div className="BuildControls">
    <p>Total price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) => <BuildControl
      label={ctrl.label}
      key={ctrl.type}
      added={() => props.addIngredient(ctrl.type)}
      removed={() => props.removeIngredient(ctrl.type)}
      disabled={props.disabledInfo[ctrl.type]}
      />)}
      <button
        className="BuildControls__order-button"
        disabled={!props.purchasable}
      >
      Order Now
      </button>
  </div>
);

export default buildControls;
