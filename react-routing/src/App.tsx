import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products';
import SelectedUser from './components/SekectedUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users/:username" element={<SelectedUser/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
