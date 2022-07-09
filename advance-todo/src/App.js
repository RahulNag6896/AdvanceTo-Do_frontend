import Todos from './components/Todos'
import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,removeTodo} from './service/actions/todoAction'

function App() {
  return (
    <div className="App">     
      <Todos/>
    </div>
  );
}

export default App;
