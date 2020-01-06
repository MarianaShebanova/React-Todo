import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const Home = (props) => {

    const goTologin = e => {
        e.preventDefault();
        props.history.push("/login");
    }

    const goToSignUp = e => {
        e.preventDefault();
        props.history.push("/register");
    }
    return (
        <div className="home-page">
            <h1>Welcome to the Market</h1>
                <div className="login-form">
                    <form>
                        <button onClick={goTologin} className="postButton">Log in</button>
                        <button onClick={goToSignUp} className="postButton">Register</button>
                    </form>
                </div>
        </div>
    );
}
export default Home;