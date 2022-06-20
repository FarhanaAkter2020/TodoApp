import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>To Do App</h1>
      <TodoList/>  {/* Imports "Todo Form" from TodoForm.js */}
      
    </div>
  );
}

export default App;
