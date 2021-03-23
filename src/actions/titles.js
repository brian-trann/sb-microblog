import axios from 'axios';
import { FETCH_TITLES } from './actionTypes';
const BASE_URL = 'http://localhost:5000/api/posts';

export function fetchTitles() {
	return async function(dispatch) {
		const res = await axios.get(BASE_URL);
		return dispatch(getTitles(res.data));
	};
}
function getTitles(titles) {
	return {
		type   : FETCH_TITLES,
		titles
	};
}
