import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation, useNavigate } from 'react-router';
import ReactSpinar from '../ReactSpinar/ReactSpinar';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <ReactSpinar></ReactSpinar>;
    }
    if (!user) {
        return <Navigate state={{ from: location }} replace to='/login' />
    }

    return children
};

export default PrivateRoutes;