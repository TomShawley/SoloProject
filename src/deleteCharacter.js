import React, { Component } from 'react';
import logo from './logo.svg';
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
    }
     setName(event) {
    
        this.setState({ name: event.target.value})
    }
    render() {
        return (
            <div>


                <body className="AppBody">
                    Enter Character Name Here:
                    
          <input type="text" placeholder="GHAJSKLD" onChange={(this.setName)} />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button class='AppButton' onClick={this.deleteCharacter}>Delete Character</button>
                </body>

            </div>
        );
    }
}

export default deleteCharacter;