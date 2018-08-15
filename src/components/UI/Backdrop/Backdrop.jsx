import React from 'react';
import './Backdrop.sass';

const Backdrop = ({ open, canceled }) =>
  open ? <div className="backdrop" onClick={canceled} aria-hidden /> : null;

export default Backdrop;
