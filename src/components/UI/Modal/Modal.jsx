import React from 'react';
import './Modal.sass';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, purchased, canceled }) => (
  <React.Fragment>
    <Backdrop open={purchased} canceled={canceled} />
    <div
      className="modal"
      style={{
        transform: purchased ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: purchased ? '1' : '0',
        visibility: purchased ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>
  </React.Fragment>
);

export default Modal;
