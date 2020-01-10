import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import { connect } from 'react-redux';

const Register = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
    })

    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const register = e => {
        e.preventDefault();
        //console.log(this.props);
        let name = credentials.username;
        console.log("BBB" + name);
        axiosWithAuth()    
            .post(`https://build-week-africanmarketplace.herokuapp.com/api/auth/register`,
                credentials,
            )
            .then(res => {
                axiosWithAuth()
                    .get('https://build-week-africanmarketplace.herokuapp.com/api/users')
                    .then(res => {
                        console.log("AAA" + name);
                        var found = res.data.find(function (element) {
                            return element.username === name;
                        });
                        props.dispatch({ type: 'USERNAME', username: found.id });
                        localStorage.setItem('userId', found.id);
                    })
                    .catch(err => console.log(err)); 
                localStorage.setItem('token', res.data.token);
                props.history.push('/market-price');
            })
            .catch(err => {
                console.log(err.response);
                alert("Wrong user or password");
            });
    }

    return (
        <div className="home-page">
            <h1>Please Register Below:</h1>
            <div className="addFormStyles">
                <form className="regFormStyles">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input className="titleStyles"
                            type="text"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input className="titleStyles2"
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input className="titleStyles"
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                        />
                    </div>                    
                    <button onClick={register} className="postButton">Register</button>
                </form>
            </div>
        </div>
    );
}

export default connect()(Register);
