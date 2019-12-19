import * as actionTypes from "../Actions/actions";
import Axios from "axios";

export const getPosts=()=>{
    Axios.get()
    .then(res=>{

    })
    .catch();
    return {
        type:actionTypes.FETCH_POST,
        posts:posts
    }
}
export const createPost=(formData)=>{
    Axios.post()
    .then(res=>{
        return dispatch=>{
            dispatch(getPosts());
            return {
                type:actionTypes.UPLOAD_POST
            }
        }
    })
    .catch();
}
export const getPost=(postId)=>{
    Axios.get()
    .then(res=>{
        return {
            type:actionTypes.VIEW_POST,
            post:res.post
        }
    })
    .catch();
}
export const likePost=(postId)=>{
    Axios.get()
    .then(res=>{
        return {
            type:actionTypes.LIKE_POST
        }
    })
    .catch();
}
