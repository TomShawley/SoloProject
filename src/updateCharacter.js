import React, { Component } from 'react';

import './App.css';
import axios from 'axios';


class updateCharacter extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            characterName: "",
            characterRace: "",
            characterClass: "",
            characterLevel: "",
            characterStrength: "",
            characterDexterity: "",
            characterConstitution: "",
            characterIntelligence: "",
            characterWisdom: "",
            characterCharisma: "",
            message:"",
        }
        this.updateCharacter = this.updateCharacter.bind(this);
        this.setName = this.setName.bind(this);
        this.setNewName = this.setNewName.bind(this);
        this.setRace = this.setRace.bind(this);
        this.setClass = this.setClass.bind(this);
        this.setLevel = this.setLevel.bind(this);
        this.setStrength = this.setStrength.bind(this);
        this.setDexterity = this.setDexterity.bind(this);
        this.setConstitution = this.setConstitution.bind(this);
        this.setDexterity = this.setDexterity.bind(this);
        this.setIntelligence = this.setIntelligence.bind(this);
        this.setWisdom = this.setWisdom.bind(this);
        this.setCharisma = this.setCharisma.bind(this);
    }

    updateCharacter = (event) => {
        axios({
            method: 'put',
            url: 'http://localhost:8080/DnDProject/rest/character/updateCharacter/' + this.state.name,
            data: {
                name: this.state.characterName,
                race: this.state.characterRace,
                characterClass: this.state.characterClass,
                level: this.state.characterLevel,
                strength: this.state.characterStrength,
                constitution: this.state.characterConstitution,
                dexterity: this.state.characterDexterity,
                intelligence: this.state.characterIntelligence,
                wisdom: this.state.characterWisdom,
                charisma: this.state.characterCharisma,
            }

            })
            .then(res => {
                this.setState({message: "Your character has been updated"})
                alert("Character Updated")
            
        })
    }
    
    setName(event) {
        this.setState({ name: event.target.value })
    }
    setNewName(event) {
        this.setState({ characterName: event.target.value })
    }
    setRace(event) {
        this.setState({ characterRace: event.target.value })
    }
    setClass(event) {
        this.setState({ characterClass: event.target.value })
    }
    setLevel(event) {
        this.setState({ characterLevel: event.target.value })
    }
    setStrength(event) {
        this.setState({ characterStrength: event.target.value })
    }
    setDexterity(event) {
        this.setState({ characterDexterity: event.target.value })
    }
    setConstitution(event) {
        this.setState({ characterConstitution: event.target.value })
    }
    setIntelligence(event) {
        this.setState({ characterIntelligence: event.target.value })
    }
    setWisdom(event) {
        this.setState({ characterWisdom: event.target.value })
    }
    setCharisma(event) {
        this.setState({ characterCharisma: event.target.value })
    }
    render() {
        return (
            <div >

                <body className="AppBody">
                    Enter Character to Update:
          <input type="text" placeholder="GHAJSKLD" onChange={(this.setName)} />
                </body>
                <body className="AppBody">
                    Enter New Character Name Here:
          <input type="text" placeholder="GHAJSKLD" onChange={(this.setNewName)} />
                </body>
            <body className="AppBody-Dropdown" >
                <div class="dropdown">
                    <button class="dropbtn-class" >Race:{this.state.characterRace}</button>
                    <div class="dropdown-content">
                        <button class="dropbtn" onClick={this.setRace} value="Elf">Elf</button>
                        <button class="dropbtn" onClick={this.setRace} value="Dragonborn">Dragonborn</button>
                        <button class="dropbtn" onClick={this.setRace} value="Dwarf">Dwarf</button>
                        <button class="dropbtn" onClick={this.setRace} value="Half-Elf">Half-Elf</button>
                        <button class="dropbtn" onClick={this.setRace} value="Halfling">Halfling</button>
                        <button class="dropbtn" onClick={this.setRace} value="Half-Orc">Half-Orc</button>
                        <button class="dropbtn" onClick={this.setRace} value="Human">Human</button>
                        <button class="dropbtn" onClick={this.setRace} value="Teifling">Teifling</button>

                    </div></div>
                <div class="dropdown">
                    <button class="dropbtn-class">Class:{this.state.characterClass}</button>
                    <div class="dropdown-content">
                        <button class="dropbtn" onClick={this.setClass} value="Barbarian">Barbarian</button>
                        <button class="dropbtn" onClick={this.setClass} value="Bard">Bard</button>
                        <button class="dropbtn" onClick={this.setClass} value="Cleric">Cleric</button>
                        <button class="dropbtn" onClick={this.setClass} value="Druid">Druid</button>
                        <button class="dropbtn" onClick={this.setClass} value="Fighter">Fighter</button>
                        <button class="dropbtn" onClick={this.setClass} value="Monk">Monk</button>
                        <button class="dropbtn" onClick={this.setClass} value="Paladin">Paladin</button>
                        <button class="dropbtn" onClick={this.setClass} value="Ranger">Ranger</button>
                        <button class="dropbtn" onClick={this.setClass} value="Rogue">Rogue</button>
                        <button class="dropbtn" onClick={this.setClass} value="Sorcerer">Sorcerer</button>
                        <button class="dropbtn" onClick={this.setClass} value="Warlock">Warlock</button>
                        <button class="dropbtn" onClick={this.setClass} value="Wizard">Wizard</button>

                    </div>
                </div>

                <div class="dropdown">
                    <button class="dropbtn-class">Level:{this.state.characterLevel}</button>
                    <div class="dropdown-content">
                        <button class="dropbtn" onClick={this.setLevel} value="1">1</button>
                        <button class="dropbtn" onClick={this.setLevel} value="2">2</button>
                        <button class="dropbtn" onClick={this.setLevel} value="3">3</button>
                        <button class="dropbtn" onClick={this.setLevel} value="4">4</button>
                        <button class="dropbtn" onClick={this.setLevel} value="5">5</button>
                        <button class="dropbtn" onClick={this.setLevel} value="6">6</button>
                        <button class="dropbtn" onClick={this.setLevel} value="7">7</button>
                        <button class="dropbtn" onClick={this.setLevel} value="8">8</button>
                        <button class="dropbtn" onClick={this.setLevel} value="9">9</button>
                        <button class="dropbtn" onClick={this.setLevel} value="10">10</button>
                        <button class="dropbtn" onClick={this.setLevel} value="11">11</button>
                        <button class="dropbtn" onClick={this.setLevel} value="12">12</button>
                        <button class="dropbtn" onClick={this.setLevel} value="13">13</button>
                        <button class="dropbtn" onClick={this.setLevel} value="14">14</button>
                        <button class="dropbtn" onClick={this.setLevel} value="15">15</button>
                        <button class="dropbtn" onClick={this.setLevel} value="16">16</button>
                        <button class="dropbtn" onClick={this.setLevel} value="17">17</button>
                        <button class="dropbtn" onClick={this.setLevel} value="18">18</button>
                        <button class="dropbtn" onClick={this.setLevel} value="19">19</button>
                        <button class="dropbtn" onClick={this.setLevel} value="1">20</button>
                    </div>
                </div>


            </body>
            <div class="dropdown">
                <button class="dropbtn-class">Strength:{this.state.characterStrength}</button>
                <div class="dropdown-content">
                    <button class="dropbtn" onClick={this.setStrength} value="1">1</button>
                    <button class="dropbtn" onClick={this.setStrength} value="2">2</button>
                    <button class="dropbtn" onClick={this.setStrength} value="3">3</button>
                    <button class="dropbtn" onClick={this.setStrength} value="4">4</button>
                    <button class="dropbtn" onClick={this.setStrength} value="5">5</button>
                    <button class="dropbtn" onClick={this.setStrength} value="6">6</button>
                    <button class="dropbtn" onClick={this.setStrength} value="7">7</button>
                    <button class="dropbtn" onClick={this.setStrength} value="8">8</button>
                    <button class="dropbtn" onClick={this.setStrength} value="9">9</button>
                    <button class="dropbtn" onClick={this.setStrength} value="10">10</button>
                    <button class="dropbtn" onClick={this.setStrength} value="11">11</button>
                    <button class="dropbtn" onClick={this.setStrength} value="12">12</button>
                    <button class="dropbtn" onClick={this.setStrength} value="13">13</button>
                    <button class="dropbtn" onClick={this.setStrength} value="14">14</button>
                    <button class="dropbtn" onClick={this.setStrength} value="15">15</button>
                    <button class="dropbtn" onClick={this.setStrength} value="16">16</button>
                    <button class="dropbtn" onClick={this.setStrength} value="17">17</button>
                    <button class="dropbtn" onClick={this.setStrength} value="18">18</button>
                    <button class="dropbtn" onClick={this.setStrength} value="19">19</button>
                    <button class="dropbtn" onClick={this.setStrength} value="1">20</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn-class">Dexterity:{this.state.characterDexterity}</button>
                <div class="dropdown-content">
                    <button class="dropbtn" onClick={this.setDexterity} value="1">1</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="2">2</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="3">3</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="4">4</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="5">5</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="6">6</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="7">7</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="8">8</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="9">9</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="10">10</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="11">11</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="12">12</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="13">13</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="14">14</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="15">15</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="16">16</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="17">17</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="18">18</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="19">19</button>
                    <button class="dropbtn" onClick={this.setDexterity} value="20">20</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn-class">Constitution:{this.state.characterConstitution}</button>
                <div class="dropdown-content">
                    <button class="dropbtn" onClick={this.setConstitution} value="1">1</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="2">2</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="3">3</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="4">4</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="5">5</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="6">6</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="7">7</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="8">8</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="9">9</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="10">10</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="11">11</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="12">12</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="13">13</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="14">14</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="15">15</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="16">16</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="17">17</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="18">18</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="19">19</button>
                    <button class="dropbtn" onClick={this.setConstitution} value="20">20</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn-class">Intelligence:{this.state.characterIntelligence}</button>
                <div class="dropdown-content">
                    <button class="dropbtn" onClick={this.setIntelligence} value="1">1</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="2">2</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="3">3</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="4">4</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="5">5</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="6">6</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="7">7</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="8">8</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="9">9</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="10">10</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="11">11</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="12">12</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="13">13</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="14">14</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="15">15</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="16">16</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="17">17</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="18">18</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="19">19</button>
                    <button class="dropbtn" onClick={this.setIntelligence} value="20">20</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn-class">Wisdom:{this.state.characterWisdom}</button>
                <div class="dropdown-content">
                    <button class="dropbtn" onClick={this.setWisdom} value="1">1</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="2">2</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="3">3</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="4">4</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="5">5</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="6">6</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="7">7</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="8">8</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="9">9</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="10">10</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="11">11</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="12">12</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="13">13</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="14">14</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="15">15</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="16">16</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="17">17</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="18">18</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="19">19</button>
                    <button class="dropbtn" onClick={this.setWisdom} value="20">20</button>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn-class">Charisma:{this.state.characterCharisma}</button>
                <div class="dropdown-content">
                    <button class="dropbtn" onClick={this.setCharisma} value="1">1</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="2">2</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="3">3</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="4">4</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="5">5</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="6">6</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="7">7</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="8">8</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="9">9</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="10">10</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="11">11</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="12">12</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="13">13</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="14">14</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="15">15</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="16">16</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="17">17</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="18">18</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="19">19</button>
                    <button class="dropbtn" onClick={this.setCharisma} value="20">20</button>
                </div>
            </div>
            <div>
                <br />
                <br />
                <br />
                <br />
<form>
                <div className='AppBody'>
                    <button type="submit" class='AppButton' onClick={this.updateCharacter}>Update Character</button>


                </div>
                </form>
            </div>
                    </div >
                
          
        );
    }
}


export default updateCharacter;