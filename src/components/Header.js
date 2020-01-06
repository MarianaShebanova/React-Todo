import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';



function Header(props) {
    const [isLoggedIn, setLogged] = useState(false);

    const LogOut = () => {
        localStorage.removeItem("token");
        props.history.push("/");
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLogged(true);
        } else {
            setLogged(false);
        }
    }, [props.updates]);



    return (
        <div class="topnav">
            <a class="active" href="https://nifty-edison-39c663.netlify.com/">ArtFolio</a>
            <Link to="/">Gallery</Link>
            <a href="https://nifty-edison-39c663.netlify.com/about.html">About Us</a>
            <Link to="/character">Users</Link>
            <Link to="profile-page">{isLoggedIn ? "Profile" : ""}</Link>
            <a onClick={() => LogOut()} className="log-out">{isLoggedIn ? "Log Out" : ""}</a>
        </div>
    );
}

export default Header;