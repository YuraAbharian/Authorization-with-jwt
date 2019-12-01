// Actions
import {LOGOUT, SET_AUTH_ME, SET_IS_REGISTERED} from "./types";
import {LoginAPI} from "../API/api";

const setAuthMe = (data) => ({type: SET_AUTH_ME, payload: data});
const setIsRegistered = () => ({type: SET_IS_REGISTERED});
const logOut = (data) => ({type: LOGOUT });

//Thunks
export const getAuthMe = () => (dispatch) => {

    return  LoginAPI.authMe().then( async response => {

        if (response.data.statusCode === 0) {

            const  { data } = response;
            return dispatch( await setAuthMe(data) )
        }
    })
};

export const getLogIn = (  email, password, check  ) => (dispatch) => {
    return  LoginAPI.login(  email, password, check).then(   response => {
        if (response.data.statusCode === 0) {
            return dispatch( getAuthMe() )
        }
    })
};

export const getLogOut = () => (dispatch) => {
    return  LoginAPI.logout().then( response => {
        if (response.data.statusCode === 0) {
            return dispatch( logOut())
        }
    })
};

export const getRegister = (login, email, password)=> (dispatch) =>{
    debugger
    return LoginAPI.register(login, email, password).then(res=> {
        if(res.data.statusCode === 0){
            dispatch(setIsRegistered())
        }
    })
};