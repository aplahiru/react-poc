import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Redux-Saga</h1>
        <h6>In here, count increment action bind with 'takeLatest' saga and 03 seconds delay for demonstration.</h6>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
