import {
	ADD_POST,
	DELETE_POST,
	UPDATE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	FETCH_POST
} from '../actions/actionTypes';

const rootReducer = (state = {}, action) => {
	let post = state[action.postId];
	switch (action.type) {
		case ADD_POST:
			return { ...state, [action.post.id]: { ...action.post, comments: [] } };
		case DELETE_POST:
			const posts = { ...state };
			delete posts[action.postId];
			return posts;

		case UPDATE_POST:
			return {
				...state,
				[action.post.id]: { ...action.post, comments: state[action.post.id].comments }
			};
		case ADD_COMMENT:
			return {
				...state,
				[action.postId]: { ...post, comments: [ ...post.comments, action.comment ] }
			};
		case DELETE_COMMENT:
			return {
				...state,
				[action.postId]: {
					...post,
					comments : post.comments.filter((c) => c.id !== action.commentId)
				}
			};
		case FETCH_POST:
			return { ...state, [action.post.id]: action.post };
		default:
			return state;
	}
};
export default rootReducer;
