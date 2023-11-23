import { actionTypes } from "../types/action-Types";
import requestHandler from "../../api/requestHandler";

const fetchPosts = () => {
    return async (dispatch) => {
        try {
            await requestHandler(
                dispatch,
                actionTypes.FETCH_POSTS,
                "get",
                "/post"
            );
        } catch (err) {
            throw err;
        }
    };
};
const CreatePost = (data) => {
    return async (dispatch) => {
        try {
            await requestHandler(
                dispatch,
                actionTypes.CREATE_POST,
                "post",
                "/post",
                data
            );
        } catch (err) {
            throw err;
        }
    };
};

const UpdatePost = (data, id) => {
    return async (dispatch) => {
        try {
            await requestHandler(
                actionTypes.UPDATE_POST,
                "patch",
                "/post",
                data,
                id
            );
        } catch (err) {
            throw err;
        }
    };
};
const LikePost = (id) => {
    return async (dispatch) => {
        try {
            await requestHandler(
                actionTypes.LIKE_POST,
                "patch",
                "/post/likes",
                {},
                id
            );
        } catch (err) {
            throw err;
        }
    };
};
const DeletePost = (id) => {
    return async (dispatch) => {
        const response = await requestHandler(
            actionTypes.DELETE_POST,
            "delete",
            "/post",
            "",
            id
        );
        dispatch(response);
    };
};

export { fetchPosts, CreatePost, UpdatePost, LikePost, DeletePost };

