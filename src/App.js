import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './AlbumStyles.css'
import ImgModal from './imgModal'

class App extends Component {
  state={
    users:[],
    id:1,
    album:[],
    albumId:1,
    show: false,
    albumImgId: 2,
    imgUrl:''
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
      var soloUnId =[]
      try{
        const response = await fetch(`https://dwaapi.juvasquez88.now.sh/api/photos?<albumId=${Id}>`);

        const album = await response.json();
        for(var i =0;i<=99;i++){
          if(album[i].albumId === Id){

            soloUnId[i] = album[i]
          }
        }
          console.log('array de id',soloUnId)
        this.setState({
          album: soloUnId,
          albumId:Id
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
    get initialState() {
      return {
        users:[],
        id:1,
        album:[],
        albumId:1,
        show: false,
        albumImgId: 2,
        imgUrl:''
      };
    }
    imageDisplay = (albumImgId) =>{
      const { album, imgUrl, albumId } = this.state
      if(albumId === 1){

        for(var k =0;k<=49;k++){
          if(album[k].id === albumImgId){
            this.setState({ show: true,
              imgUrl: album[k].url
            });
            console.log('imge selected url: ',this.state.imgUrl)
          }
        }
        
      }
        if(albumId === 2){
          
        for(var i =50;i<=99;i++){
          if(album[i].id === albumImgId){
            this.setState({ show: true,
              imgUrl: album[i].url
            });
            console.log('imge selected url: ',this.state.imgUrl)
          }
        }
      }
      return (
          imgUrl
      );
    }
    albumImghandler = (albumImgId) => (e) => {
      e.preventDefault()
      this.setState({albumImgId})
      console.log('Id imagen escuchado:',albumImgId)
     this.imageDisplay(albumImgId);
    }
  
    handleClick = (Id) => (e) => {
      e.preventDefault()
      this.setState({ Id })
      console.log('Id escuchado:',Id)
      this.getAlbumImages(Id);
    }

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };


  render(){
    const { users, album, imgUrl } = this.state
    
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
       
          <main>
          
          <ImgModal show={this.state.show} handleClose={this.hideModal}>
          <h3>Modal imagen seleccionada</h3>
            
          
            <Image className="ImageClass" src={imgUrl} rounded />
          </ImgModal>
         
        </main>
        </div>

      </div>
    );
  }
}

export default App;
