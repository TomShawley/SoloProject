import React, { Component } from 'react';

import './App.css';
import axios from 'axios';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            newUsername: "",
            newPassword: "",
            message: "",
            signinusername: "",
            signinpassword: "",
            getusername: "",
            getpassword: "",
            getuserid:"",
        }
        this.createUser = this.createUser.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.setName = this.setName.bind(this);
        this.signinpassword = this.signinpassword.bind(this);
        this.signinusername = this.signinusername.bind(this);
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
            url: "http://localhost:8080/DnDProject/rest/users/deleteUser" + this.state.name,
        })
    }

    signIn = (event) => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/DnDProject/rest/users/getUser/' + this.state.signinusername,
           responseType:'json',
        })
           .then(res => {
                this.setState({
                getpassword:res.data[0].password,
               getusername:res.data[0].username,
               getuserid:res.data[0].userid,
            
        })
        if (this.state.getusername === this.state.signinusername && this.state.getpassword === this.state.signinpassword) {
            alert("Successfully logged in")
                sessionStorage.setItem("User", this.state.getusername)
                sessionStorage.setItem("UserID", this.state.getuserid)
        }
    })
    }
    setUsername(event) {
        this.setState({ newUsername: event.target.value })
    }
    setPassword(event) {
        this.setState({ newPassword: event.target.value })
    }
    setName(event) {
        this.setState({ name: event.target.value })
    }
    signinusername(event) {
        this.setState({ signinusername: event.target.value })
    }
    signinpassword(event) {
        this.setState({ signinpassword: event.target.value })
    }

    render() {
        return (
            <div>
                <div className='AppBody' >
                    <input type="text" placeholder="Username" onChange={(this.setUsername)} />
                    <input type="password" placeholder="Password" onChange={(this.setPassword)} />
                    <button class='AppButton' onClick={this.createUser}>Create User</button>

                </div>
                <div className='AppBody' >
                    <input type="text" placeholder="Username" onChange={(this.setName)} />

                    <button class='AppButton' onClick={this.deleteUser}>Delete User</button>

                </div>
                <div className='AppBody' >
                    <input type="text" placeholder="Username" onChange={(this.signinusername)} />
                    <input type="password" placeholder="Password" onChange={(this.signinpassword)} />
                    <button class='AppButton' onClick={this.signIn}>Sign In</button>

                </div>
            </div>
        );
    }
}

export default Login;