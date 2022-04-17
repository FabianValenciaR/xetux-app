import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ component }) => {
    let location = useLocation();
    const state = useSelector(state => state)

    if (!state.isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return component
}

export default RequireAuth