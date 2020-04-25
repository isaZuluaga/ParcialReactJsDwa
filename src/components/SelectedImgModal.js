import React, { Component } from 'react';
import { PageContext } from '../context/pageContext'
import Image from 'react-bootstrap/Image';
import '../AlbumStyles.css'
import '../App.css';
import Button from 'react-bootstrap/Button';

class SelectedImgModal extends Component{
    render(){
        const { hideModal, imgUrl, show} = this.context
        const showHideClassName = show ? "display-block" : "display-none";
        return(
                <div className={showHideClassName}>
                    <section className="modal-main">
                        <h3 className="modalText">Imagen seleccionada</h3>
                        <Image className="ImageClass" src={imgUrl} rounded />
                        <Button className="modalButton" variant="secondary" onClick={hideModal}>Close</Button>
                    </section>
                </div>
        );
    }
}
SelectedImgModal.contextType = PageContext
export default SelectedImgModal;