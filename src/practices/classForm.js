import React from "react";
// import axios from "axios";
import axiosAPI from "../axios";

class FormClass extends React.Component {
    constructor() {
        super();

        this.state = {
            "username": "",
            "password": ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let username = document.getElementById("txtUsername").value;
        let password = document.getElementById("paPassword").value;
        console.log(username, "username");
        console.log(password, "password");

        let apiURL = `/getAll/?username=${username}&password=${password}`;
        console.log(apiURL);
        axiosAPI.get(apiURL)
            .then(res => {
                // console.log(res);
                console.log(res.data);
                console.log(res.data.username, "username from API");
                console.log(res.data.password, "password from API");
            })
            .catch(err => console.log(err.message));
    }
    handleClick = () => {
        let username1 = this.state.username;
        let password1 = this.state.password;
        console.log(username1, "username1");
        console.log(password1, "password1");

        let apiURL = `/getAllPost/`;
        let data = {
            "username": username1,
            "password": password1
        }
        console.log(apiURL);
        axiosAPI.post(apiURL, data)
            .then(async res => {
                // console.log(res);
                console.log(res.data);
                console.log(res.data.username, "username from API");
                console.log(res.data.password, "password from API");

                // await this.setState({"token": res.data.token});
                // let headers = {
                //     'Authorization': `Bearer ${this.state.token}`
                // }
                // axios.post(apiURL, data, {headers: headers})
            })
            .catch(err => console.log(err.message));
    }
    updatePasswordState = (event) => {
        this.setState({"password": event.target.value});
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="txtUsername" name="txtUsername" placeholder="Username:" /><br />
                    <input type="password" id="paPassword" name="paPassword" placeholder="Password:" /><br />
                    <input type="submit" value="Submit" />
                </form>

                <input type="text" id="txtUsername1" name="txtUsername1" placeholder="Username:" onChange={(e) => (this.setState({"username": e.target.value}))} />{this.state.username}<br />
                <input type="password" id="paPassword1" name="paPassword1" placeholder="Password:" onChange={this.updatePasswordState} />{this.state.password}<br />
                <input type="button" value="Submit" onClick={this.handleClick} />
            </>
        )
    }
}

export default FormClass;