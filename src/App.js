import React, { Component } from 'react';
import Page from './components/Page'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './AlbumStyles.css'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}
export default App;
