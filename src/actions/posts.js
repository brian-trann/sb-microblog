import {
	ADD_POST,
	DELETE_POST,
	UPDATE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	FETCH_POST
} from './actionTypes';
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/posts';

export function addPost(post) {
	return {
		type : ADD_POST,
		post
	};
}
export function deletePost(postId) {
	return {
		type   : DELETE_POST,
		postId
	};
}
export function updatePost(post) {
	return {
		type : UPDATE_POST,
		post
	};
}
export function addComment(postId, comment) {
	return {
		type    : ADD_COMMENT,
		postId,
		comment
	};
}
export function deleteComment(postId, commentId) {
	return {
		type      : DELETE_COMMENT,
		postId,
		commentId
	};
}
export function getPostFromApi(id) {
	return async function(dispatch) {
		const res = await axios.get(`${BASE_URL}/${id}`);
		return dispatch(getPost(res.data));
	};
}
function getPost(post) {
	return {
		type : FETCH_POST,
		post
	};
}

export function postCommentToApi(postId, text) {
	return async function(dispatch) {
		const res = await axios.post(`${BASE_URL}/${postId}/comments`, { text });
		return dispatch(addComment(postId, res.data));
	};
}
export function removeCommentFromApi(postId, commentId) {
	return async function(dispatch) {
		await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`);
		return dispatch(deleteComment(postId, commentId));
	};
}

export function deletePostFromApi(postId) {
	return async function(dispatch) {
		await axios.delete(`${BASE_URL}/${postId}`);
		return dispatch(deletePost(postId));
	};
}
export function addPostToApi(post) {
	return async function(dispatch) {
		const { title, description, body } = post;
		const res = await axios.post(`${BASE_URL}`, { title, description, body });
		return dispatch(addPost(res.data));
	};
}
export function updatePostToApi(post) {
	return async function(dispatch) {
		const { id, title, body, description } = post;
		const res = await axios.put(`${BASE_URL}/${id}`, { title, description, body });
		return dispatch(updatePost(res.data));
	};
}
