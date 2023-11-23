import { actionTypes } from "../types/action-Types";

const initialState = {
    posts: [],
    newPost: null,
    updatedPost: null,
    likePost: null,
    deletePost: null,
    errorMessage: null
};

const PostsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_POSTS:
            return { ...state, posts: payload };
        case actionTypes.CREATE_POST:
            return { ...state, newPost: payload };
        case actionTypes.UPDATE_POST:
            return { ...state, updatedPost: payload };
        case actionTypes.LIKE_POST:
            return { ...state, likePost: payload };
        case actionTypes.DELETE_POST:
            return { ...state, deletePost: payload };
        case actionTypes.ERROR:
            return { ...state, errorMessage: payload };
        default:
            return state;
    }
};

export { PostsReducer };
