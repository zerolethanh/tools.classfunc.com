/**
 * Created by ZE on 2017/03/26.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Hello">
                Hello LE VAN THANH!
            </div>
        );
    }

}
export default Hello;
//ReactDOM.render(<Hello />, document.getElementById('Hello'));