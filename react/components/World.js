/**
 * Created by ZE on 2017/03/26.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class World extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="World">
                <h1>World</h1>
            </div>
        );
    }

}
export default World;
//ReactDOM.render(<World />, document.getElementById('World'));