import React from "react";

class ToDoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "1",
            value: "dummy"
        };
    }
    render() {
        return(
            <div>
                <h1>Class Component demo</h1>
                <p>Hello {this.props.value}!</p>
                <p>Id is: {this.state.id} and the value is {this.state.value}</p>
                <button onClick={this.iAmHere}>Click me!</button>
            </div>
        );
    };
    iAmHere = () => {
        console.log('I am here!');
        this.setState({
            value: 'New Value'
        });
    };
};

export { ToDoComponent };