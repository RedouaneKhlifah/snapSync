import axios from "../../api/Axios";
import { actionTypes } from "../types/action-Types";

const fetchPosts = () => {
    return async (dispatch) => {
        const response = await axios.get("/post");
        dispatch({ type: actionTypes.FETCH_POSTS, payload: response.data });
    };
};

const CreatePost = (post) => {
    return async (dispatch) => {
        const response = await axios.post("/post", post);
        dispatch({ type: actionTypes.CREATE_POST, payload: response.data });

        dispatch(fetchPosts());
    };
};
const UpdatePost = (post, id) => {
    return async (dispatch) => {
        const { title, image, date, creator, message, tags } = post;
        const response = await axios.patch(`/post/${id}`, {
            title,
            image,
            date,
            creator,
            message,
            tags
        });
        dispatch({ type: actionTypes.UPDATE_POST, payload: response.data });

        dispatch(fetchPosts());
    };
};
const LikePost = (id) => {
    return async (dispatch) => {
        const response = await axios.patch(`/post/likes/${id}`);
        dispatch({ type: actionTypes.LIKE_POST, payload: response.data });
        dispatch(fetchPosts());
    };
};
const DeletePost = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`/post/${id}`);
        dispatch({ type: actionTypes.DELETE_POST, payload: response.data });

        dispatch(fetchPosts());
    };
};
const LikePost=(id)=>{
 return async(dispatch)=>{
     const response = await axios.patch(`/post/likes/${id}`);
	 dispatch({type:actionTypes.LIKE_POST,payload:response.data});
	 dispatch(fetchPosts());
 };
};
 const DeletePost=(id)=>{
	return async(dispatch)=>{
	const response = await axios.delete(`/post/${id}`);
	dispatch({type:actionTypes.DELETE_POST,payload:response.data});
	dispatch(fetchPosts());

 };
};

export { fetchPosts, CreatePost, UpdatePost, LikePost, DeletePost };

