var React = require('react');
var Redux = require('redux');
var connect = require('react-redux').connect;

class Route1 extends React.Component {
   
    constructor() {
        super();
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    

    incrementCounter() {
       const { dispatch } = this.props;
       dispatch(incrementAction());
    }

    render() {
        return(
            <div>
                <h1>Route1</h1>
                <p>Count: {this.props.counter.count}</p>
                <button onClick={this.incrementCounter}>+</button>
                
            </div>
        )
    }
}
const incrementAction = () => {
    return {
        type: 'INCREMENT_COUNT'
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.count
    };
};

const mapDispatchToProps = dispatch => {
     return {
        dispatch
    };
};

module.exports =  connect(mapStateToProps,mapDispatchToProps)(Route1);
