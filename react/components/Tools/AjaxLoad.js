/**
 * Created by ZE on 2017/03/30.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class AjaxLoad extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        $.get({
            url: 'https://api.github.com/users',
            dataType: 'json',
            success: (users) => {
                this.setState({users})
            }
        })
    }

    render() {
        return (
            <div className="AjaxLoad">
                <ul>
                    {this.state.users.map((user, idx) => {
                        return (
                            <li key={user.login}>
                                <div>
                                    {user.login}<br/>
                                    <a href={user.html_url}>{user.html_url}</a>
                                </div>

                                <img src={user.avatar_url} style={{width:100,height:100}} alt=""/>
                            </li>
                        )
                    })}
                </ul>
                <img src={this.state.avatar_url} alt=""/>
                {/*https://jsonplaceholder.typicode.com/users*/}
                {/*https://api.github.com/users*/}
            </div>
        );
    }

}
export default AjaxLoad;
//ReactDOM.render(<AjaxLoad />, document.getElementById('AjaxLoad'));