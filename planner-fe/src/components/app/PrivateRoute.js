import React from 'react'
import {Navigate, Route} from 'react-router-dom'
import AuthService from "../../service/AuthService";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const isLoggedIn = AuthService.isLoggedUser()

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoute