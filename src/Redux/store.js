
import {applyMiddleware, combineReducers, createStore} from 'redux'

import thunkMiddleware from "redux-thunk";
import logger from  'redux-logger'

import LoginReducer from "./Login-Reducer";
import PostReducer from "./Add-Posts";

const Reducers = combineReducers({
    log: LoginReducer,
    post: PostReducer,
});


let store = createStore(Reducers,applyMiddleware(thunkMiddleware , logger
    ) );


export  default store