import { ADD_TODO, REMOVE_TODO } from "../Constants/index"

export function createTodo(state = 'initialState', { type, data }) {
    switch (type) {
        case ADD_TODO: 
            return {
                ...state,
                data: data
            }
            // break;
        default:
            return state

    }
}

export function deleteTodo(state = 'initialState', { type, data }) {
    switch (type) {
        case REMOVE_TODO: 
            return {
                ...state,
                data: data
            }
            // break;
        default:
            return state

    }
}