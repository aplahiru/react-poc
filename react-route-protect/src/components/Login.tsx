import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../store/authSlice';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin= ()=>{
        dispatch(userLogin());
        navigate("/dashboard");
    }
    return (
        <div>
            <h1>React Route protecting</h1>
            <h3>Login Page</h3>
            <p>This app has /dashboard route path to navigate logged users to inside the app.</p>
            <p>Without login user can not access that route by typing it.</p>
            <button onClick={handleLogin}>LogIn</button>
        </div>
    )
}

export default Login
