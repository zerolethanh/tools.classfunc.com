/**
 * Created by ZE on 2017/03/28.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class NumberButton extends Component {
    render() {
        const val = this.props.val;
        if (val === '') {
            return <br/>;
        }
        return <button style={{fontSize: 'large', margin: 2}} onClick={this.props.onClick}>
            {val}
        </button>
    }
}

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {exp: '', result: 0};
        this.createNumbersButtons = this.createNumbersButtons.bind(this)
        this.buttonClick = this.buttonClick.bind(this)
        this.expChange = this.expChange.bind(this)
        this.expKeyPress = this.expKeyPress.bind(this)
    }

    createNumbersButtons() {
        let numbers = [
            1, 2, 3, '+', '',
            4, 5, 6, '-', '',
            7, 8, 9, '*', '',
            0, '(', ')', '/', '',
            'DEL', '='
        ].map((n, idx) => {
            return <NumberButton key={idx} val={n} onClick={this.buttonClick}/>
        });
        return <div>{numbers}</div>;
    }

    buttonClick(e) {
        const num = e.target.innerHTML;
        let exp;
        switch (num) {
            case '=':
                this.tryCalculateResult();
                break;
            case 'DEL':
                this.Calculator_exp.focus();
                exp = this.state.exp.slice(0, -1);
                this.setState({exp});
                // this.tryCalculateResult();
                break;
            default:
                this.Calculator_exp.focus();
                exp = this.state.exp + num;
                this.setState({exp});
                // this.tryCalculateResult();
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.setState({
            exp: this.state.exp,
        }, () => {
            this.tryCalculateResult();
        })
    }


    tryCalculateResult() {
        this.setState((prevState) => {
            let result = prevState.result;
            try {
                result = eval(prevState.exp)
            } catch (e) {
                // result = e;
            }
            return {result}
        });
    }

    expChange(e) {
        const exp = e.target.value;
        this.setState({exp});
        this.tryCalculateResult();
    }

    expKeyPress(e) {
        // console.log(e.key);
        if (e.key === 'Enter') {
            // alert(this.tryCalculateResult())
        }
    };

    render() {
        return (
            <div>
                <div className="Calculator"
                    // style={{'textAlign': 'center'}}
                >
                    <input type="text"
                           id="Calculator_exp"
                           ref={(input) => {
                               this.Calculator_exp = input;
                           }}
                           className="full-width"
                           style={{fontSize: 'large'}}
                           value={this.state.exp}
                           onChange={this.expChange}
                           onKeyPress={this.expKeyPress}/>
                    <br/>
                    <input type="text" className="full-width"
                           style={{'border': 0, fontSize: 'large', color: 'blue', width: '100%'}}
                           value={this.state.result} readOnly={true}/>
                    {this.createNumbersButtons()}
                </div>
            </div>
        );
    }

}
export default Calculator;
//ReactDOM.render(<Calculator />, document.getElementById('Calculator'));
