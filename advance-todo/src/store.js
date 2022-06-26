import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './service/Reducer/index';

const  store = configureStore(
    {reducer:rootReducer},
        applyMiddleware(
            thunkMiddleware,
        )
);

export default store;