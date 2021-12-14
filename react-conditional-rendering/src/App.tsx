import './App.css';
import ConditionalOption01 from './components/ConditionalOption01';
import ConditionalOption02 from './components/ConditionalOption02';
import ConditionalOption03 from './components/ConditionalOption03';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConditionalOption01/>
        <hr style={{backgroundColor:"white", width:"100%"}}/>
        <ConditionalOption02/>
        <hr style={{backgroundColor:"white", width:"100%"}}/>
        <ConditionalOption03/>
      </header>
    </div>
  );
}

export default App;
