import Todo from './components/Todo'
import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,removeTodo} from './service/actions/todoAction'

function App() {
  return (
    <div className="App">
      my app      
      <Todo/>
    </div>
  );
}

export default App;
