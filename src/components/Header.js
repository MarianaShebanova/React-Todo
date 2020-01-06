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
            <Link to="/">Home</Link>
            <Link to="/market-page">{isLoggedIn ? "Market" : ""}</Link>
            <a onClick={() => LogOut()} className="log-out">{isLoggedIn ? "Log Out" : ""}</a>
        </div>
    );
}

export default Header;