import axios from "../../api/Axios";
import { actionTypes } from "../types/action-Types";

const fetchPosts = () => {
    return async (dispatch) => {
        const response = await axios.get("/post");
        dispatch({ type: actionTypes.FETCH_POSTS, payload: response.data });
    };
};

const CreatePost = (post) => {
    const tags = post.tags.split(",");
    const postData = { ...post, tags: tags };
    console.log(postData);
    return async (dispatch) => {
        const response = await axios.post("/post",postData );
        dispatch({ type: actionTypes.CREATE_POST, payload: response.data });
        
        dispatch(fetchPosts());
    };
};
const UpdatePost = (post,id) => {
    const tags = post.tags.split(",");
    const postData = { ...post, tags: tags };
    return async (dispatch) => {
        const response = await axios.patch(`/post/${id}`,postData );
        dispatch({ type: actionTypes.UPDATE_POST, payload: response.data });
		
        dispatch(fetchPosts());
    };
};

export { fetchPosts, CreatePost,UpdatePost };
