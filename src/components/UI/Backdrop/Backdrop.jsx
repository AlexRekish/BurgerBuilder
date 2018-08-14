import React from 'react';
import './Backdrop.sass';

const Backdrop = ({ purchased, canceled }) =>
  purchased ? <div className="backdrop" onClick={canceled} aria-hidden /> : null;

export default Backdrop;
