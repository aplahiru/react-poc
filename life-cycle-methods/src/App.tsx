import React, { useState } from 'react';
import './App.css';
import LifeCycleHookClass from './components/LifeCycleHookClass';
import LifeCycleHookFunctional from './components/LifeCycleHookFunctional';

function App() {
  const [compChange, setCompChange] = useState(false);
  const handleClick= ()=>{
    setCompChange(!compChange);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Change Component <button onClick={handleClick}>Click Here</button></h2>
        {
          compChange === true && <LifeCycleHookClass greet='greet from props for class component'/>
        }
        {
          compChange === false && <LifeCycleHookFunctional greet='greet from props for functional component'/>
        }
      </header>
    </div>
  );
}

export default App;
