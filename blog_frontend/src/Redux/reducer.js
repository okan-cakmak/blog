import Types from "./types";
import _ from "lodash"
const initialState = {
    posts: [],
    loading:false
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.POSTS_LOADING: {
            console.log("create_item");
            return {...state,loading: action.payload};
        }

        case Types.GET_POSTS: {
            return {...state,posts: action.payload};
        }

        default:
            return state;
    }
}

export default postReducer;