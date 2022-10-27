import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Contexts/AuthProvider';

const PrivetRoute = ({ children }) => {

    const { user } = useContext(AuthContext)
    // console.log(user);
    const location = useLocation()

    if (user && user?.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;