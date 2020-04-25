import React, { Component } from 'react';
import './AlbumStyles.css'
import Button from 'react-bootstrap/Button';
import ReactDOM from "react-dom";

const ImgModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <Button className="modalButton" variant="secondary" onClick={handleClose}>Close</Button>
      </section>
    </div>
  );
};
export default ImgModal;
