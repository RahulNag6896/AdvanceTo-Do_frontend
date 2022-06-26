import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../service/Reducer/todoReducer';
import {addTodoAction,removeTodoAction} from './../service/actions/todoAction'




function Todo() {

    const [todos , setTodos] = useState([]);
    const [todo , setTodo] = useState('') 
    const dispatch = useDispatch();
    const createTodo = useSelector(s => s.createTodo)
    
    const addNewTodo = ()=> {
        setTodos([...todos, {todo:todo , done:false}]);
        setTodo('')
    }
    
    const isChecked = (i)=> {
        let newArr = [...todos]
        if(newArr[i].done === false)
            newArr[i].done = true
        else{
            newArr[i].done = false  
        }
        setTodos(newArr)
    }

    return(
        <>
            <input placeholder='type here' value={todo} onChange={e=>setTodo(e.target.value)}/>
            <button onClick={addNewTodo}>submit</button>
            <div>
                {
                    todos?.map((item, i)=>(
                        <div key={i}>
                            <input type='checkbox' value={item.done} onChange={e=>isChecked(i)}/>
                            <span className={item.done === true? 'deleted':''}>{item.todo}</span>
                        </div>
                    ))
                }
            </div>

        </>
    );
}
export default Todo;