import {ADD_POST} from "./types";
import {ProfileAPI} from "../API/api";

const addPost =(post)=> ({type: ADD_POST, payload: post});

export const setPostThunk =(post)=> async (dispatch)=>{
    const res = await ProfileAPI.addPost(post);
    console.log('Add Post: ', res);
    dispatch(addPost(post))
};