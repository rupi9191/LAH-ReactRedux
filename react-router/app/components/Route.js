var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;


import Route1 from './Route1';
import Route2 from './Route2';

class Routing extends React.Component {
    render() {
        return(
                     
            <Router>
                <div>
                    <ul>
                        <li><Link to="/1">Route1</Link></li>
                        <li><Link to="/2">Route2</Link></li>
                    </ul>
                    <Route path="/1" component={Route1}/>
                    <Route path="/2" component={Route2}/>
                </div>
            </Router>
    
        )
    }
}

export default Routing;