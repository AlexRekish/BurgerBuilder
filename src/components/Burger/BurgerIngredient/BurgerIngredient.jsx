import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.sass';

const BurgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className="burger__bread-bottom" />;
      break;
    case 'bread-top':
      ingredient = (
        <div className="burger__bread-top">
          <div className="burger__bread-seeds1" />
          <div className="burger__bread-seeds2" />
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className="burger__meat" />;
      break;
    case 'cheese':
      ingredient = <div className="burger__cheese" />;
      break;
    case 'salad':
      ingredient = <div className="burger__salad" />;
      break;
    case 'bacon':
      ingredient = <div className="burger__bacon" />;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
