import Types from "./types";
import axios from "axios";


export const getPosts = () => {
    return dispatch => {
        dispatch({type:Types.POSTS_LOADING, payload:true})
        axios.get('http://172.31.254.222:8000/api/posts')
            .then(response => {
                    dispatch({type:Types.GET_POSTS, payload:response.data})
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.POSTS_LOADING, payload:false})
            }
            );
    }
}