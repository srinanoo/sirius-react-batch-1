import React from "react";
import Login from "./classLogin";
import Logout from "./classLogout";

class Header extends React.Component {
    constructor(props) {
        super(props);

        // console.log(props);
        // this.state = {
        //     "logged": "false"
        // }

        // this.state = {
        //     "id": 1,
        //     "name": "Dinesh",
        //     "subject": "ReactJS",
        //     "logged": false
        // }

        this.state = {
            "login": false
        }
    }

    // doLogin = (event) => {
    //     console.log(event.target.id);
    //     (event.target.id === "login") ? this.setState({"logged": true}) : this.setState({"logged": false});
    // }

    // updateState = () => {
    //     // this.setState({
    //     //     "id": 2,
    //     //     "name": "Tony",
    //     //     "subject": "NodeJs"
    //     // })

    //     this.setState((previousState) => {
    //         return {...previousState, "subject": "NodeJs"}
    //     });
    // }

    goLogin = (event) => {
        event.preventDefault();
        console.log(event.target.id);

        (event.target.id === "login") ? this.setState({"login": true}) : this.setState({"login": false})

        // console.log(this.state.login);
    }


    render() {
        return (
            <>
                <header>
                    <div>Header Container</div>
                    <div>HEre: {this.state.login.toString()}</div>
                    <div>
                        <Menu />

                        {/* <nav>
                            
                            <ul>
                                <li>Menu 1</li>
                                <li>Menu 2</li>
                                <li>Menu 3</li>
                                <li>Menu 4</li>
                                <li>

                                {
                                    (this.state.login) ?
                                        <>
                                            <Logout />
                                            <a href="#l" id="logout" onClick={this.goLogin}>Logout</a> 
                                        </>
                                        :
                                        <>
                                            <Login />
                                            <a href="#l" id="login" onClick={this.goLogin}>Login</a>
                                        </>
                                }
                                {
                                        // (this.state.login) 
                                        //     ? 
                                        //         <a href="#l" id="logout" onClick={this.goLogin}>Logout</a> 
                                        //     : 
                                        //         <a href="#l" id="login" onClick={this.goLogin}>Login</a>

                                        // (this.state.login) && <a href="#l" id="logout" onClick={this.goLogin}>Logout</a> 
                                    }                                    

                                    <button id="login" onClick={this.goLogin}>Login</button>
                                    <button id="logout" onClick={this.goLogin}>Logout</button>
                                </li>
                            </ul>
                        </nav> */}
                        
                    </div>
                    <div style={{"backgroundColor": "red", "color": "white"}}>
                        <p>Id: {this.state.id}</p>
                        <p>Name: {this.state.name}</p>
                        <p>Subject: {this.state.subject}</p>
                    </div>
                    {/* <button onClick={this.updateState}>Update State</button> */}
                </header>
            </>
        )
    }
}

// {
//     (this.state.logged) ? (<Logout />, <button id="logout" onClick={this.doLogin}>Logout</button>) : (<Login />, <button id="login" onClick={this.doLogin}>Login</button>)
// }

class Menu extends React.Component {

    constructor() {
        super();

        this.state = {
            "logged": false
        }
    }

    goLogin = (event) => {
        event.preventDefault();
        console.log(event.target.id);

        (event.target.id === "login") ? this.setState({"logged": true}) : this.setState({"logged": false})
    }

    render() {
        return (
            <nav>
                {/* {this.state.logged} */}
                <ul>
                    <li>Menu 1</li>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                    <li>Menu 4</li>
                    <li>
                        
                        {/* {
                            (this.state.logged) 
                                ? 
                                    <a href="#l" id="logout" onClick={this.goLogin}>Logout</a> 
                                : 
                                    <a href="#l" id="login" onClick={this.goLogin}>Login</a>
                        } */}

                        {
                            (this.state.logged) ?
                                <>
                                    <Logout />
                                    <a href="#l" id="logout" onClick={this.goLogin}>Logout</a> 
                                </>
                                :
                                <>
                                    <Login />
                                    <a href="#l" id="login" onClick={this.goLogin}>Login</a>
                                </>
                        }

                        {/* <button id="login" onClick={this.goLogin}>Login</button>
                        <button id="logout" onClick={this.goLogin}>Logout</button> */}
                    </li>
                </ul>
            </nav>
        )
    }
}

// class Circle extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         return (
//             <div id="circle" data-custom={this.props.shape}>circle</div>
//         )
//     }
// }

// class Square extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         return (
//             <div id="square" data-custom={this.props.shape}>square</div>
//         )
//     }
// }

// class Triangle extends React.Component {
//     constructor(props) {
//         super();
//     }
//     render() {
//         return (
//             <div id="triangle" data-custom={this.props.shape}>triangle</div>
//         )
//     }
// }

export default Header;
// export {Menu};