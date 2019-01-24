import React, { Component } from 'react';
class Content extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/characterCreation">Create Character</a></li>
                    <li><a href="/findCharacter">Find Character</a></li>
                    <li><a href="/updateCharacter">Update Character</a></li>
                    <li><a href="/deleteCharacter">Delete Character</a></li>
                </ul>
            </div>
        );
    }
}
export default Content; 
