var React = require('react');

//state
/**lifecycle events
 *componentDidMount()
 * componentWillMount()
 * componentWillReceiveProps()
 */
//UI

export class App extends React.Component {
    componentDidMount() {
        console.log("mounted")
    }
    render() {
        return(
            <div>Hello Rupesdfhjldf</div>
        )
    }
}
export class App1 extends React.Component {
    render() {
        return(
            <div>Hello</div>
        )
    }
}



