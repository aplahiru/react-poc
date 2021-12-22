import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/users" component={Users}/>
        <Route path="/products" component={Products}/>
        <Route path="/" component={Home}/>
      </header>
    </div>
  );
}

export default App;
