import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../store/authSlice';

export function Dashboard() {
  const dispatch = useDispatch();
  const handleLogOut= ()=>{
    dispatch(userLogOut());
  }
  return (
    <div>
      <h1>User is LoggedIn</h1>
      <h3>Welcome Back!</h3>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}
