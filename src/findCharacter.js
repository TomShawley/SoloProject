import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class findCharacter extends Component {
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
                    <button class='AppButton'>Find Character</button>
                </body>

            </div>
        );
    }
}

export default findCharacter;