import React, { Component } from 'react';

class Character extends Component {
    render() {
        return (
            <div>
                 <div>
                    {this.props.data.name}
                </div>
                <div>
                    {this.props.data.race}
                </div>
                <div>
                    {this.props.data.characterClass}
                </div>
                 <div>
                    {this.props.data.level}
                </div>
                <div>
                    {this.props.data.strength}
                </div>
                <div>
                   {this.props.data.dexterity} 
                </div>
                  <div>
                    {this.props.data.constitution}
                </div>
                <div>
                    {this.props.data.intelligence}
                </div>
                <div>
                    {this.props.data.wisdom} 
                </div>
                 <div>
                    {this.props.data.charisma}
                </div>
                <br />
            </div>
        );
    }
}

export default Character;
