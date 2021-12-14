import React from 'react';
import './App.css';
import TodoListFunctional from './components/TodoListFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Redux Todo App</h1>
        <TodoListFunctional/>
      </header>
    </div>
  );
}

export default App;
