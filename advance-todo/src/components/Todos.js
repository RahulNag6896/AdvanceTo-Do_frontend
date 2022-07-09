// Imports from react and Redux
import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../service/Reducer/todoReducer'
import {addTodoAction,removeTodoAction} from '../service/actions/todoAction'
// additional todo file
import Todo from './Todo'




function Todos() {

    // Holds all the todos
    const [todos , setTodos] = useState([])
    // holds text typed by user.
    const [todoTxt , setTodoTxt] = useState('') 
    // function call from Redux, not yet used.
    const dispatch = useDispatch()
    // function call from Redux, also not used yet.
    const createTodo = useSelector(s => s.createTodo)
    
    // Adds new todo to the list click event.
    const addNewTodo = ()=> {
        setTodos([...todos, {todo:todoTxt , done:false}])
        setTodoTxt('')
    }
    
    return(
        // React Fragment
        <>
        {/* Takes input of the user. */}
            <input placeholder='type here' value={todoTxt} onChange={e=>setTodoTxt(e.target.value)}/>
            {/* Button click function */}
            <button onClick={addNewTodo}>submit</button>
            <div>
                {
                    // Itrates over all the todo objects in the Todos State.
                    todos?.map((item, i)=>(
                        // Setting values for a single Todo
                        <Todo key={i} values={{item, todos, setTodos}}/>
                    ))
                }
            </div>

        </>
    )
}
export default Todos