import React from 'react';
import { Dashboard } from './components/Dashboard';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Utility/ProtectedRoute';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route 
        path="/dashboard" 
        element={
            <ProtectedRoute redirectTo="/">
              <Dashboard/>
            </ProtectedRoute>
        }
      />
      <Route path="*" element={"404 Not Found"}/>
    </Routes>
    </div>
  );
}

export default App;
