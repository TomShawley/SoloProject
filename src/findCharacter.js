import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';



class findCharacter extends Component {
    constructor() {
        super();
        this.state ={
            name:"",
            characterName: "",
            characterRace:"",
            characterClass: "",
            characterLevel:"",
            characterStrength: "",
            characterDexterity:"",
            characterConstitution: "",
            characterIntelligence:"",
            characterWisdom: "",
            characterCharisma:"",

        }
        this.findCharacter = this.findCharacter.bind(this);
        this.setName=this.setName.bind(this);
    }
    findCharacter = (event) => {
        axios({
            method:'get',
            url: 'http://localhost:8080/DnDProject/rest/character/findCharacter/' + this.state.name,
            responseType: 'json'
        })
        .then(res => {
            this.setState({characterName: res.data.name})
            this.setState({characterRace: res.data.race})
            this.setState({characterClass: res.data.class})
            this.setState({characterLevel: res.data.level})
            this.setState({characterStrength: res.data.strength})
            this.setState({characterDexterity: res.data.dexterity})
            this.setState({characterConstitution: res.data.constitution})
            this.setState({characterIntelligence: res.data.intelligence})
            this.setState({characterWisdom: res.data.wisdom})
            this.setState({characterCharisma: res.data.charisma})
            console.log(this.state.character);
        })
    }
    setName(event) {
    
        this.setState({ name: event.target.value})
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
                
                <div>Name:{this.state.characterName}<br/>
                    Race:{this.state.characterRace}<br/>
                    Class:{this.state.characterClass}<br/>
                    Level:{this.state.characterLevel}<br/>
                    Strength:{this.state.characterStrength}<br/>
                    Dexterity:{this.state.characterDexterity}<br/>
                    Constitution:{this.state.characterConstitution}<br/>
                    Intelligence:{this.state.characterIntelligence}<br/>
                    Wisdom:{this.state.characterWisdom}<br/>
                    Charisma:{this.state.characterCharisma}
                </div>
</div>
            </div>
        );
    }
}

export default findCharacter;