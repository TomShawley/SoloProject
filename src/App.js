import React, { Component } from 'react';

import './App.css';
import characterCreation from './characterCreation.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Contents from './Content.js';
import updateCharacter from './updateCharacter.js';
import deleteCharacter from './deleteCharacter.js';
import findCharacter from './findCharacter.js';
import Home from './Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
<div>
          <div>
            <Route path={"/"} component={Contents} />
            <Route path={"/Home"} component={Home} />
            <Route path={"/characterCreation"} component={characterCreation} />
            <Route path={"/updateCharacter"} component={updateCharacter} />
            <Route path={"/deleteCharacter"} component={deleteCharacter} />
            <Route path={"/findCharacter"} component={findCharacter} />




          </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
