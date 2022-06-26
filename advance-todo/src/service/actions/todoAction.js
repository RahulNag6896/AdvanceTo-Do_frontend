import { ADD_TODO, REMOVE_TODO } from "./../Constants"

export const addTodo = (data)=>{
    return{
        type: ADD_TODO,
        data: data
    }
}

export const removeTodo = (data)=>{
    return{
        type: REMOVE_TODO,
        data: data
    }
}