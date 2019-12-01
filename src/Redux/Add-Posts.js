import {ADD_POST} from "../Actions/types";


const initialState ={
   posts:[]
};


const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            return {
                  posts: [...state.posts, action.payload]
            }
        }
        default:{
            return state
        }
    }
};

export default PostReducer;