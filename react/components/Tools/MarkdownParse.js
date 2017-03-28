/**
 * Created by ZE on 2017/03/27.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
class MarkdownParse extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        this.textChange = this.textChange.bind(this)
    }

    textChange(e) {
        this.setState({text: e.target.value})
    }

    getRawMarkup() {
        const md = new Remarkable();
        return {__html: md.render(this.state.text)};
    }

    render() {
        document.title = 'MarkdownParse';
        return (
            <div className="MarkdownParse">
                <h3>MarkdownParse</h3>
                <textarea name="" id="" cols="30" rows="10"
                          value={this.state.text}
                          onChange={this.textChange}/>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        );
    }

}
export default MarkdownParse;
//ReactDOM.render(<MarkdownParse />, document.getElementById('MarkdownParse'));