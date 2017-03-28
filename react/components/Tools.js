/**
 * Created by ZE on 2017/03/27.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MarkdownParse from "./Tools/MarkdownParse";
import Calculator from './Tools/Calculator'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = React.createClass({
    render: function () {
        document.title = 'HOME';
        return <div>
            HOME
        </div>
    }
});
const components = {
    Home,
    MarkdownParse,
    Calculator
};
class Tools extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className="Tools">
                    <ul>
                        {Object.keys(components).map((tool) => {
                            return <li key={tool}>
                                <Link to={`/react/` + tool}>{tool}</Link>
                            </li>
                        })
                        }
                    </ul>
                    <Route path="/react/:tool" component={Tool}/>
                </div>
            </Router>
        );
    }

}

const Tool = ({match}) => (
    <div>
        <Route component={components[match.params.tool]}/>
    </div>
);
export default Tools;
//ReactDOM.render(<Tools />, document.getElementById('Tools'));