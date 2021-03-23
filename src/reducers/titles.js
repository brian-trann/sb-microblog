import { FETCH_TITLES } from '../actions/actionTypes';

const rootReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_TITLES:
			return [ ...action.titles ];
		default:
			return state;
	}
};
export default rootReducer;
