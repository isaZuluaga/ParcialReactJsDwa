import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import './App.css';
import './AlbumStyles.css'
import MyVerticallyCenteredModal from './imgModal'

class App extends Component {
  state={
    users:[],
    id:1,
    album:[],
    albumId:1
  }
  async componentDidMount(){
    this.apiCall();
    //this.albumDisplay(albumId)
}
     apiCall = async ()=>{
      try{
        const response = await fetch(`https://dwaapi.juvasquez88.now.sh/api/albums`);
        const users = await response.json();
        this.setState({ users: users })
        console.log(users)
      } catch (err) {
          console.log(err.message)
        }
    }
    getAlbumImages = async (Id)=>{
      try{
        const response = await fetch(`https://dwaapi.juvasquez88.now.sh/api/photos?<albumId=${Id}>`);

        const album = await response.json();
        this.setState({
          album: album
        })
        this.albumDisplay(album)
        console.log('album images: ',album)
      } catch(err){
        console.log(err.message)
      }
    }
    usersDisplay = (users) =>{
      if(!users.length) return null;
      return users.map((users, index) =>(
      <div key={index}>
          <Image className="ImageClass" src={users.url} rounded onClick={this.handleClick(users.id)}/>
      </div>
      ));
    }
    albumDisplay = (album) =>{
      if(!album.length) return null;
      return album.map((album, index) =>(
      <div key={index}>
          <Image className="ImageperAlbum" src={album.url} onClick={this.albumImghandler(album.id)} />
      </div>
      ));
    }
    imageDisplay = (albumImgId) =>{
      return (
          <Image className="ImageperAlbum" src={albumImgId.url}/>
      );
    }
    albumImghandler = (albumImgId) => (e) => {
      e.preventDefault()
      this.setState({ albumImgId })
      console.log('Id imagen escuchado:',albumImgId)
     this.imageDisplay(albumImgId);
    }
    handleClick = (Id) => (e) => {
      e.preventDefault()
      this.setState({ Id })
      console.log('Id escuchado:',Id)
      this.getAlbumImages(Id);
    }
  render(){
    const { users, album } = this.state
  
    return (
      <div className="App">
        <div className="menuContainer">
          <Button variant="secondary">Albums</Button>
        </div>
        <div className="albumImageContainer">
          {this.usersDisplay(users)}
        </div>
        <div className="imagesPerAlbumContainer">
              <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Imagenes en el album seleccionado</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.albumDisplay(album)}
              </Modal.Body>
            </Modal.Dialog>
        </div>
        <div>
        
        </div>
      
      </div>
    );
  }
}

export default App;
