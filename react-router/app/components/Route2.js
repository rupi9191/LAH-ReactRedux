var React = require('react');

let state = {count: 0};
class Route2 extends React.Component {
    constructor() {
        super();
        this.state = state;
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    componentWillUnmount() {
        state = this.state;
    }

    incrementCounter() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return(
            <div>
                <h1>Route2</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCounter}>Increment</button>
            </div>
        )
    }
}

module.exports = Route2;