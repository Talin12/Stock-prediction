import React, {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);
    // const accessToken = localStorage.getItem('accessToken');
    return isLoggedIn ? children : <Navigate to="/login" />;
}

export default PrivateRoute;