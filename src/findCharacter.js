import React, { Component } from 'react';

import axios from 'axios';
import './App.css';



class findCharacter extends Component {
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
            characterUser: "",
            isFounds: false,
            message: ""

        }
        this.findCharacter = this.findCharacter.bind(this);
        this.setName = this.setName.bind(this);
    }
    findCharacter = (event) => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/DnDProject/rest/character/findCharacter/' + this.state.name,
            responseType: 'json'
        })
            .then(res => { 
                this.setState({
                    message: res.data.message,

                })
                console.log(this.state.message)
                alert(this.state.message)
                if (res.data[0] != null) {
                    this.setState({ characterName: res.data[0].name })
                    this.setState({ characterRace: res.data[0].race })
                    this.setState({ characterClass: res.data[0].characterClass })
                    this.setState({ characterLevel: res.data[0].level })
                    this.setState({ characterStrength: res.data[0].strength })
                    this.setState({ characterDexterity: res.data[0].dexterity })
                    this.setState({ characterConstitution: res.data[0].constitution })
                    this.setState({ characterIntelligence: res.data[0].intelligence })
                    this.setState({ characterWisdom: res.data[0].wisdom })
                    this.setState({ characterCharisma: res.data[0].charisma })
                    this.setState({ isFounds: true })
                    console.log(this.state.name);
                } else {
                    this.setState({ characterName: " -" })
                    this.setState({ characterRace: " -" })
                    this.setState({ characterClass: " -" })
                    this.setState({ characterLevel: " -" })
                    this.setState({ characterStrength: " " })
                    this.setState({ characterDexterity: " -" })
                    this.setState({ characterConstitution: " -" })
                    this.setState({ characterIntelligence: " -" })
                    this.setState({ characterWisdom: " -" })
                    this.setState({ characterCharisma: " -" })
                }
            
        
               
                
    })}
    
    setName(event) {

        this.setState({ name: event.target.value })
    }
    render() {



        return (
            <div >


                <div className="AppBody">
                    Enter Character Name Here:
                    <form onSubmit={this.update}>
                        <input id="textbox" type="text" placeholder="Finaran Goldhill" onChange={(this.setName)} ></input>
                        <br />
                        <br />
                        <br />
                        <br />
                        <input type="button" onClick={this.findCharacter} value="Find Character"></input>
                    </form>

                    {this.state.isFounds ?
                        <div>Name:{this.state.characterName}<br />
                            Race:{this.state.characterRace}<br />
                            Class:{this.state.characterClass}<br />
                            Level:{this.state.characterLevel}<br />
                            Strength:{this.state.characterStrength}<br />
                            Dexterity:{this.state.characterDexterity}<br />
                            Constitution:{this.state.characterConstitution}<br />
                            Intelligence:{this.state.characterIntelligence}<br />
                            Wisdom:{this.state.characterWisdom}<br />
                            Charisma:{this.state.characterCharisma}<br />

                        </div>
                        : null}
                </div>
            </div>
        );
    }
}

export default findCharacter;