import {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo,removeTodo} from './../service/actions/todoAction'




function Todo() {

    const [todo , setTodo] = useState('')
    const dispatch = useDispatch();
    const createTodo = useSelector(s => s.createTodo)

    useEffect(() => {
        let obj = {"iuhu":"sefe"}  
        dispatch(addTodo(obj))
    },[])
    
    useEffect(()=>{
        console.log(createTodo.data)
        setTodo(createTodo.data)
    },[createTodo])

    return(
        <>
        this is todo componet{JSON.stringify(todo)}
        </>
    );
}
export default Todo;