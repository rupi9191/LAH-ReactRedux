var React = require('react');

class Greeting extends React.Component {

    render() {
        const name = {firstName: "rupesh"}
        return(
            <div>
                <p>Hello</p>
               <StateComponent/>
                
             </div>
        )
    }
}

//component with props
class User extends React.Component {
    constructor() {
        super();
    }
 
    render() {
        const {firstName, lastName} = this.props;

        return (
            <span>{`${firstName.firstName} ${lastName}`}</span>
        )
    }
}

let state = {firstName: "rupesh"}
// component with state
class StateComponent extends React.Component {
    constructor() {
        super();
        this.state = state;
        this.changeState = this.changeState.bind(this);
    }

    changeState(e) {
        e.preventDefault();
        this.setState(() => {
            return {firstName: "Changed"}
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.firstName}</p>
                <button onClick={this.changeState}>Change</button>
            </div>
        )
    }
}

module.exports = Greeting;

