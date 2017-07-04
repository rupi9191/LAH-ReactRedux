var React = require('react');

class Greeting extends React.Component {
    render() {
        return(
            <div>
                Hello <User firstName="Rupesh" lastName="B" />
                <StateComponent/>
             </div>
        )
    }
}

//component with props
class User extends React.Component {
 
    render() {
        const {firstName, lastName} = this.props;

        return (
            <span>{`${firstName} ${lastName}`}</span>
        )
    }
}

// component with state
class StateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "Rupesh"
        }
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

