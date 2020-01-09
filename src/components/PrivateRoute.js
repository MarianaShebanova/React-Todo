import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                console.log(localStorage.getItem('userId'));
                if (localStorage.getItem('token') && localStorage.getItem('userId') ){
                    // render component from props
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default PrivateRoute;