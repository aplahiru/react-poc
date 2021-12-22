import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {RootState} from '../store/store';

// declaring type
interface ProtectedRouteProps{
    redirectTo: string,
    children: React.ReactElement;
}

function ProtectedRoute({children, redirectTo}: ProtectedRouteProps) {
    // get auth status from redux store
    const authStatus = useSelector((state:RootState) =>state.auth.isLogged);
    
    return (
        authStatus ? children : <Navigate to={redirectTo}/>
    )
}

export default ProtectedRoute;