import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return (
            <h1 className="App-header">
          
         
     
                <ul  >
                    <li ><a href="/">DnD Character Creation Thing</a></li>
                    <li ><a href="/characterCreation">Create Character</a></li>
                    <li><a href="/findCharacter">Find Character</a></li>
                    <li><a href="/updateCharacter">Update Character</a></li>
                    <li><a href="/deleteCharacter">Delete Character</a></li>
                </ul>
                
            </h1>
        );
    }
}
export default Contents; 