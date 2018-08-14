import React from 'react';
import './Modal.sass';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, purchased, canceled }) => (
  <React.Fragment>
    <Backdrop purchased={purchased} canceled={canceled} />
    <div
      className="modal"
      style={{
        transform: purchased ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: purchased ? '1' : '0'
      }}
    >
      {children}
    </div>
  </React.Fragment>
);

export default Modal;
