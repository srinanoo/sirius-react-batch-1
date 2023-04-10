import React from "react";

class TestClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "counter": 0
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        if(this.state.counter === 1) {
            throw new Error("THIS IS AN ERROR PRODUCED");
        }
        return (
            <>
                <div>
                    {this.props.counter}
                    <button onClick={this.updateState}>Click</button><br />
                    This is my first Class Component
                </div><br /><br />
            </>
        )
    }
}

export default TestClass;