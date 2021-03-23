import { ADD_POST, DELETE_POST, UPDATE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

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
