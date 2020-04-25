import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class SideBar extends Component{
    render(){
        return(
            <div className="menuContainer">
                <Button variant="secondary">Albums</Button>
            </div>
        );
    }
}
export default SideBar;



