import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ isAuth, component }) => {
    let location = useLocation();

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return component
}

export default RequireAuth