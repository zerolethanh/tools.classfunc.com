/**
 * Created by ZE on 2017/03/27.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {timer: new Date()};
    }

    componentDidMount() {
        this.tick();
    }

    componentWillUnmount() {
        clearInterval(this.ticker)
    }

    tick() {
        this.ticker = setInterval(() => {
            this.setState({timer: new Date()})
        }, 1000)
    }

    render() {
        return (
            <div className="Timer">
                <h1 style={{align: 'center'}}>{this.state.timer.toLocaleString()}</h1>
            </div>
        );
    }

}
export default Timer;
//ReactDOM.render(<Timer />, document.getElementById('Timer'));
