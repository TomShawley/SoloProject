import React, { Component } from 'react';

import './App.css';
import axios from 'axios';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
            newUsername: "",
            newPassword: "",
            message:"",
            username:"",
            password:""
        }
        this.createUser = this.createUser.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.setName = this.setName.bind(this);
    }
    createUser = (event) => {
        axios({
            method: 'post',
            url: "http://localhost:8080/DnDProject/rest/users/createUser",
            data: {
                username: this.state.newUsername,
                password: this.state.newPassword,
            }
        })
        .then(res => {
                this.setState({
                    message: res.data.message,

                })
                console.log(this.state.message)
                alert(this.state.message)
                 })
                }
    
    deleteUser = (event) => {
        axios({
            method: 'delete',
            url:"http://localhost:8080/DnDProject/rest/users/createUser" +this.state.name, 
        })
    }
    setUsername(event) {
        this.setState({ newUsername: event.target.value })
    }
    setPassword(event) {
        this.setState({ newPassword: event.target.value })
    }
    setName (event) {
        this.setState({name :event.target.value})
    }
    Username (event) {
        this.setState({username: event.target.value})
    }
    Password (event) {
        this.set.state({password: event.target.value})
    }

    render() {
        return (
            <div>
            <div className='AppBody' >
                <input type="text" placeholder="Username" onChange={(this.setUsername)} />
                <input type="text" placeholder="Password" onChange={(this.setPassword)} />
                <button class='AppButton' onClick={this.createUser}>Create User</button>

            </div>
            <div className='AppBody' >
                <input type="text" placeholder="Username" onChange={(this.setName)} />

                <button class='AppButton' onClick={this.deleteUser}>Delete User</button>

            </div>
            <div className='AppBody' >
                <input type="text" placeholder="Username" onChange={(this.Username)} />
                <input type="text" placeholder="Password" onChange={(this.Password)} />
                <button class='AppButton' onClick={this.login}>Sign In</button>

            </div>
            </div>
        );
    }
}

export default Home;