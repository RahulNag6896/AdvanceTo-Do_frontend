import { ADD_TODO, REMOVE_TODO } from "./../Constants"

export const addTodoAction = (data)=>{
    return{
        type: ADD_TODO,
        data: data
    }
}

export const removeTodoAction = (data)=>{
    return{
        type: REMOVE_TODO,
        data: data
    }
}