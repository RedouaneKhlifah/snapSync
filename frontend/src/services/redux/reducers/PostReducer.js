import { actionTypes } from "../types/action-Types";

const intialState = {
    posts: []
};
const PostsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_POSTS:
            return { ...state, posts: payload };

        case actionTypes.CREATE_POST:
            return{...state,newPost:payload}
        case actionTypes.UPDATE_POST:
			return {...state,updatedPost:payload}
        default:
            return state;
    }
};

export { PostsReducer };
