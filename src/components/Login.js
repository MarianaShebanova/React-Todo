import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/market-page');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="home-page">
                <h1>Please Log in:</h1>
                <div className="addFormStyles">
                <form onSubmit={this.login} className="regFormStyles">
                   <div>
                    <label htmlFor="username">Username:</label>   
                    <input className="titleStyles"
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div>
                            <label htmlFor="password">Password:</label>
                    <input className="titleStyles2"
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button className="postButton">Log in</button>
                </form>
                </div>
            </div>
        );
    }
}
export default Login;
