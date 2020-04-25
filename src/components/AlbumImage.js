import React, { Component } from 'react';
import { PageContext } from '../context/pageContext'

export default class AlbumImage extends Component{
    render(){
        const { usersDisplay, apiCall, users} = this.context
        return(
            <div className="albumImageContainer">
                {apiCall}
                {usersDisplay(users)}
            </div>
        );
    }
}
AlbumImage.contextType = PageContext

