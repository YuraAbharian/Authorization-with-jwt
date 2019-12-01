import {LOGOUT, SET_AUTH_ME, SET_IS_REGISTERED} from "../Actions/types";

const initialState ={
    id:'',
    email:'',
    login:'',
    isLogged: false,
    isRegistered: null
};


const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_REGISTERED:{
            return {
                ...state, isRegistered: true
            }
        }
        case SET_AUTH_ME: {
            return {
                ...state,
                id: action.payload.user._id,
                email: action.payload.user.email,
                login: 'Yura',
                isLogged: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                id: null,
                email:null,
                login: null,
                isLogged: false
            }
        }
        default:{
            return state
        }
    }
};

export default LoginReducer;