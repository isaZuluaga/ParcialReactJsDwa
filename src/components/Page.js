import React, { Component } from 'react';
import { PageProvider } from '../context/pageContext'
import SideBar from './SideBar'
import AlbumImage from './AlbumImage'
import ImagesPerAlbum from './ImagesPerAlbum'
import SelectedImgModal from './SelectedImgModal'
import '../App.js';
import '../AlbumStyles.css'

export default class Page extends Component {
  render() {
    return (
      <div className="App">
        <PageProvider>
            <SideBar/>
            <AlbumImage/>
            <ImagesPerAlbum/>
            <SelectedImgModal/>
        </PageProvider>
      </div>
    )
  }
}
