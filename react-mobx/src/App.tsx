import './App.css';
import TodoList from './components/TodoList';
import store from './store/todoStore';

function App() {
  return (
    <div className="App">
      <TodoList todoStore={store}/>
    </div>
  );
}

export default App;
