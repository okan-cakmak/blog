import Types from "./types";
import _ from "lodash"
const initialState = {
    posts: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.CREATE_ITEM: {
            console.log("create_item");
            return {...state,posts: action.payload};
        }

        case Types.DELETE_ITEM: {
            console.log("deleteitem");
            return state;
        }

        default:
            return state;
    }
}

export default postReducer;