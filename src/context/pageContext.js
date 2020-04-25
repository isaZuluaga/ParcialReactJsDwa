import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';
import '../App.js';
import '../AlbumStyles.css'

const PageContext = React.createContext();

class PageProvider extends Component {
    state={
    users:[],
    id:1,
    album:[],
    albumId:1,
    show: false,
    albumImgId: 2,
    imgUrl:'',

  }
  async componentDidMount(){
    this.apiCall();

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
    imageDisplay = (albumImgId) =>{
      const { album, imgUrl, albumId } = this.state
      if(albumId === 1){

        for(var k =0;k<=49;k++){
          if(album[k].id === albumImgId){
            this.setState({ show: true,
              imgUrl: album[k].url
            });
            console.log('imge selected url: ',imgUrl)
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


  render() {
    const { children } = this.props
    return (
      <PageContext.Provider value={{
        ...this.state,
        apiCall: this.apiCall,
        getAlbumImages: this.getAlbumImages,
        usersDisplay: this.usersDisplay,
        albumDisplay: this.albumDisplay,
        imageDisplay: this.imageDisplay,
        albumImghandler: this.albumImghandler,
        handleClick: this.handleClick,
        showModal: this.showModal,
        hideModal: this.hideModal
      }}>
        { children }
      </PageContext.Provider>
    )
  }
}

const PageConsumer = PageContext.Consumer;

export { PageContext, PageProvider, PageConsumer }
