import React from 'react';
import './BuildControl.sass';

const BuildControl = ({ label, onAddIngredient, onRemoveIngredient, enabled }) => (
  <div className="build-control">
    <div className="build-control__label">{label}</div>
    <button
      type="button"
      className="build-control__btn build-control__btn--less"
      onClick={onRemoveIngredient}
      disabled={!enabled}
    >
      Less
    </button>
    <button
      type="button"
      className="build-control__btn build-control__btn--more"
      onClick={onAddIngredient}
    >
      More
    </button>
  </div>
);

export default BuildControl;
