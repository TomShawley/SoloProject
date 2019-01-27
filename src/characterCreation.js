import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class characterCreation extends Component {
    createCharacter = (event) => {
        axios({
            method: 'post',
            url:'http://localhost:8080/DnDProject/rest/character/createCharacter',
            responseType: 'json'
        })
    }
    render() {
        return (
            <div className="App">


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


                </body>
                <div class="dropdown">
                    <button class="dropbtn-class">Strength</button>
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
                    <button class="dropbtn-class">Dexterity</button>
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
                    <button class="dropbtn-class">Constitution</button>
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
                    <button class="dropbtn-class">Intelligence</button>
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
                    <button class="dropbtn-class">Wisdom</button>
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
                    <button class="dropbtn-class">Charisma</button>
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
                    <br />
                    <br />
                    <br />
                    <br />

                    <div>
                        <button class='AppButton'>Create Character</button>


                    </div>
                </body>
            </div>
        );
    }
}

export default characterCreation;
