import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class deleteCharacter extends Component {
    render() {
        return (
            <div className="App">


                <body className="AppBody">
                    Enter Character Name Here:
          <input type="text" placeholder="GHAJSKLD" />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button class='AppButton'>Delete Character</button>
                </body>

            </div>
        );
    }
}

export default deleteCharacter;