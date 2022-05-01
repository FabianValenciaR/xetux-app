import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ component }) => {
    let location = useLocation();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    if (isAuthenticated === false) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return component
}

export default RequireAuth