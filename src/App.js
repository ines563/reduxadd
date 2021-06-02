
import './App.css';
import AddTask from './comp/AddTask';
import TaskList from './comp/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1> Todo App</h1>
      <AddTask/>
      <TaskList/> 
    </div>
  );
}

export default App;
