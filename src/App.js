import './App.css';
import image from './list.jpg';
import { ToDoList } from './ToDoList';


function App() {
  return (
    <div className="App">
     <div className='container'>
      <img src={ image } width="200px" alt="list" />
      </div>
      <div className='container'>
      <h1>Список дел</h1>
      </div>     
      <ToDoList />  

    </div>
  );
}

export default App;
