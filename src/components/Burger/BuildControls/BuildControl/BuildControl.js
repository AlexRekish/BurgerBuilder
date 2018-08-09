import React from 'react';
import './BuildControl.sass';

const buildControl = (props) => (
  <div className="BuildControl">
    <label className="BuildControl__label">{props.label}</label>
    <button
      className="BuildControl__btn BuildControl__btn--less"
      onClick={props.removed}
      disabled={props.disabled}
    >
    Less
    </button>
    <button
      className="BuildControl__btn BuildControl__btn--more"
      onClick={props.added}
      >
      More
    </button>
  </div>
);

export default buildControl;
