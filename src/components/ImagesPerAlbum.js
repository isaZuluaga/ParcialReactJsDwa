import React, { Component } from 'react';
import { PageContext } from '../context/pageContext'
import Modal from "react-bootstrap/Modal";
import '../App.js';
import '../AlbumStyles.css'

class ImagePerAlbum extends Component{
    render(){
        const { albumDisplay, album } = this.context
        return(
            <div className="imagesPerAlbumContainer">
              <Modal.Dialog>
                    <Modal.Header>
                    <Modal.Title>Imagenes en el album seleccionado</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {albumDisplay(album)}
                    </Modal.Body>
              </Modal.Dialog>
        </div>
        );
    }
}
ImagePerAlbum.contextType = PageContext
export default ImagePerAlbum;
