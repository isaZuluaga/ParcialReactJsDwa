import React, { Component } from 'react';
import './AlbumStyles.css'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import ReactDOM from "react-dom";

const ImgModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};
export default ImgModal;
// const ImgModal = (props) => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const showModal = () => {
//     setIsOpen(true);
//   };

//   const hideModal = () => {
//     setIsOpen(false);
//   };
  
//   return (
//     <div>
//       <button onClick={showModal}>Display Modal</button>
//       <Modal show={isOpen} onHide={hideModal}>
//         <Modal.Header>
//           <Modal.Title>Selected image from album</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
      
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={hideModal}>Cancel</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };
//export default ImgModal;