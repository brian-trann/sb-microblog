import { FETCH_TITLES, CAST_VOTE } from '../actions/actionTypes';

const sortByVote = (posts) => {
	return posts.sort((a, b) => b.votes - a.votes);
};

const rootReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_TITLES:
			return sortByVote(action.titles);

		case CAST_VOTE:
			const newState = state.map(
				(title) => (title.id === action.postId ? { ...title, votes: action.votes } : title)
			);

			return sortByVote(newState);

		default:
			return state;
	}
};
export default rootReducer;
