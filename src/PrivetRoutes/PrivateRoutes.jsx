import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user}=useContext(AuthContext)
    const location =useNavigate()
     if(!user){
        return <Navigate state={location.pathname} to='/login'/>
    }
    return children
};

export default PrivateRoutes;