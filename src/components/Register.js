import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
        console.log(credentials);
        axiosWithAuth()
            .post(`https://build-week-africanmarketplace.herokuapp.com/api/auth/register/`,
                credentials,
            )
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/market-page');
            })
            .catch(err => {
                console.log("there was an error");
                console.log(err);
            })
        localStorage.setItem('token', "1");
        props.history.push('/market-page');
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

export default Register;