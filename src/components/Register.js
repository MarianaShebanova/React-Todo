import React, { useState, useEffect } from "react";
import axios from 'axios';

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
        axios
            .post(`https://als-artportfolio.herokuapp.com/createnewuser/`,
                credentials,
            )
            .then(response => {
                console.log("response", response);
                sessionStorage.setItem("token", response.data.access_token);
                // once token is handeled, navigate to profile page
                props.history.push("/profile-page");
            })
            .catch(err => {
                console.log("there was an error");
                console.log(err);
            })
    }

    const goToLogin = e => {
        e.preventDefault();
        props.history.push("/");
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
                        <label htmlFor="primaryemail">Email:</label>
                        <input className="titleStyles"
                            type="email"
                            name="primaryemail"
                            value={credentials.primaryemail}
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