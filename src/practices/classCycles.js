import React from "react";
import axiosAPI from "../axios";

class ClassCycle extends React.Component {
    constructor(props) {
        super();

        this.state = {
            "id": 1,
            "name": "Name",
            "subject": "Subject",
            "timer": ""
        }
    }

    // static getDerivedStateFromProps(props) {
    //     return {
    //         "id": props.id,
    //         "name": props.name,
    //         "subject": props.subject
    //     }
    // }

    componentDidMount() {
        this.setState(() => ({ "id": 2, "name": "New Name", "subject": "NodeJs" }));

        let apiURL = "/getAll/?username=Dinesh&password=TEST123!"
        this.timer = setInterval(() => {
            axiosAPI.get(apiURL)
            .then(res => {
                // console.log(res);
                console.log(res.data);
                console.log(res.data.username, "username from API");
                console.log(res.data.password, "password from API");
            })
            .catch(err => console.log(err.message));
        }, 10000);
    }

    updateStates = () => {
        this.setState({ "id": 3, "name": "SOMETHIGN ELSE", "subject": "SOME SUBJECT" });
    }

    shouldComponentUpdate() {
        return true;
    }

    getSnapshotBeforeUpdate(previousState, previousProps) {
        console.log(previousState.id, previousState.name, "getSnapshotBeforeUpdate")
        return ""
    }

    componentDidUpdate() {
        console.log(this.state.id, this.state.name, "componentDidUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return (
            <>
                <h1>Class Life Cycle</h1>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
                <p>{this.state.subject}</p>

                <p><button onClick={this.updateStates}>Update State</button></p>
            </>
        )
    }
}

export default ClassCycle;