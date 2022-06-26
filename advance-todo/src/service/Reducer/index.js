import {combineReducers} from 'redux'
import {createTodo , deleteTodo} from './todoReducer'

const rootReducer = combineReducers({
    createTodo,
    deleteTodo,
})
export default  rootReducer