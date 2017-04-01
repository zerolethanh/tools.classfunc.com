/**
 * Created by ZE on 2017/03/30.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class WindowWidth extends Component {

    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};

    }

    componentDidMount() {
        this.setState(
            {width: window.innerWidth, height: window.innerHeight},
            () => {
                window.addEventListener(
                    "resize",
                    ({target}) => this.setState({width: target.innerWidth, height: target.innerHeight})
                )
            }
        )
    }

    render() {
        return <h1>
            <div>Width: {this.state.width}px</div>
            <div>Height:{this.state.height}px</div>
        </h1>
    }

}
export default WindowWidth;
//ReactDOM.render(<WindowWidth />, document.getElementById('WindowWidth'));