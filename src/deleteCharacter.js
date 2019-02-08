import React, { Component } from 'react';

import './App.css';
import axios from 'axios';


class deleteCharacter extends Component {
    constructor() {
        super();
        this.state ={
            name:"",
        }
        this.setName=this.setName.bind(this);
    }
    deleteCharacter = (event) => {
        axios({
            method:'delete',
            url: 'http://localhost:8080/DnDProject/rest/character/deleteCharacter/' + this.state.name,
            responseType: 'json'
        })
        .then(res => {
            window.alert("Character Deleted")
        })
    }
     setName(event) {
    
        this.setState({ name: event.target.value})
    }
    render() {
        return (
            <div>


                <body className="AppBody">
                    <h1 className="HeaderAppBody">
                    Enter Character Name Here:
                    </h1>
                    
          <input type="text" placeholder="GHAJSKLD" onChange={(this.setName)} />
                   <form>
                    <button class='AppButton' onClick={this.deleteCharacter}>Delete Character</button></form>
                </body>

            </div>
        );
    }
}

export default deleteCharacter;