import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1 className="App-header">
          DnD Character Creation Thing
          <input type="button" value="Create Character" className="AppButton" />
          <input type="button" value="Search Character" className="AppButton" />
          <input type="button" value="Update Character" className="AppButton" />
          <input type="button" value="Delete Character" className="AppButton" />
          
        </h1>
        <body className="AppBody">
          Enter Character Name Here:
          <input type="text" placeholder="GHAJSKLD" />
        </body>
        <body className="AppBody-Dropdown" >
          <div class="dropdown">
            <button class="dropbtn-race" value="">Race:</button>
            <div class="dropdown-content">
              <a href="#">Elf</a>
              <a href="#">Dragonborn</a>
              <a href="#">Dwarf</a>
              <a href="#">Half-Elf</a>
              <a href="#">Halfling</a>
              <a href="#">Half-Orc</a>
              <a href="#">Human</a>
              <a href="#">Teifling</a>

            </div></div>
          <div class="dropdown">
            <button class="dropbtn-class">Class</button>
            <div class="dropdown-content">
              <a href="#">Barbarian</a>
              <a href="#">Bard</a>
              <a href="#">Cleric</a>
              <a href="#">Druid</a>
              <a href="#">Fighter</a>
              <a href="#">Monk</a>
              <a href="#">Paladin</a>
              <a href="#">Ranger</a>
              <a href="#">Rogue</a>
              <a href="#">Sorcerer</a>
              <a href="#">Warlock</a>
              <a href="#">Wizard</a>

            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn-class">Sub-Class</button>
            <div class="dropdown-content">
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn-class">Background</button>
            <div class="dropdown-content">
              <a href="#">Acolyte</a>
              <a href="#">Charlatan</a>
              <a href="#">Criminal/Spy</a>
              <a href="#">Entertainer</a>
              <a href="#">Folk Hero</a>
              <a href="#">Gladiator</a>
              <a href="#">Guild Merchant</a>
              <a href="#">Hermit</a>
              <a href="#">Knight</a>
              <a href="#">Noble</a>
              <a href="#">Outlander</a>
              <a href="#">Pirate</a>
              <a href="#">Sage</a>
              <a href="#">Sailor</a>
              <a href="#">Soldier</a>
              <a href="#">Urchin</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn-class">Level</button>
            <div class="dropdown-content">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#">7</a>
              <a href="#">8</a>
              <a href="#">9</a>
              <a href="#">10</a>
              <a href="#">11</a>
              <a href="#">12</a>
              <a href="#">13</a>
              <a href="#">14</a>
              <a href="#">15</a>
              <a href="#">16</a>
              <a href="#">17</a>
              <a href="#">18</a>
              <a href="#">19</a>
              <a href="#">20</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn-class">Spells</button>
            <div class="dropdown-content">
            </div>
          </div>

        </body>
        <body class="AppBody-Proficencies">
          <div>

            <h1 className>Skill Proficiencies</h1>
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Acrobatics
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Animal Handling
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Arcana
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Athletics
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Deception
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Hisory
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Insight
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Intimidation
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Investigation
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Medicine
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Nature
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Perception
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark">
              </span>Performance
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Persuasion
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Religion
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Sleight of Hand
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Stealth
            </label><br />
            <label class="container">
              <input type="checkbox" />
              <span class="checkmark"></span>
              Survival
            </label>



          </div>
        </body>


      </div>
    );
  }
}

export default App;
