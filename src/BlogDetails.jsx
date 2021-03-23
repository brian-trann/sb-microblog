import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	deletePostFromApi,
	getPostFromApi,
	postCommentToApi,
	removeCommentFromApi
} from './actions/posts';

import BlogButtons from './BlogButtons';
import BlogForm from './BlogForm';
import CommentList from './CommentList';
import './BlogDetails.css';

const BlogDetails = () => {
	const postId = Number(useParams().postId);
	const dispatch = useDispatch();
	const post = useSelector((st) => st.posts[postId]);
	const history = useHistory();
	const [ isEditing, setIsEditing ] = useState(false);

	useEffect(
		() => {
			async function getPost() {
				dispatch(getPostFromApi(postId));
			}
			if (!post) {
				getPost();
			}
		},
		[ dispatch, post, postId ]
	);

	const handleEditing = () => {
		setIsEditing((status) => !status);
	};
	const handleDelete = (id) => {
		dispatch(deletePostFromApi(id)).then(() => history.push('/'));
	};

	// if (!post) return history.push('/'); // change to loading?

	const handleAddComment = (commentObj) => {
		const { text } = commentObj;
		dispatch(postCommentToApi(postId, text));
	};
	const handleDeleteComment = (commentId) => {
		dispatch(removeCommentFromApi(postId, commentId));
	};

	const blogDetails = (post) => {
		const { title, description, body, id, comments } = post;
		return (
			<div className='BlogDetails-container container my-5'>
				<div className='BlogDetails-title h2'>{title}</div>
				<BlogButtons handleEditing={handleEditing} handleDelete={handleDelete} id={id} />
				<div className='BlogDetails-description lead'>
					<i>{description}</i>
				</div>
				<div className='BlogDetails-body my-3'>{body}</div>
				<hr />
				<CommentList
					comments={comments}
					handleAddComment={handleAddComment}
					handleDeleteComment={handleDeleteComment}
				/>
			</div>
		);
	};

	return (
		<React.Fragment>
			<div>
				{!isEditing ? (
					<React.Fragment>
						{!post ? <div className='h4'>Loading...</div> : blogDetails(post)}
					</React.Fragment>
				) : (
					<BlogForm
						handleEditing={handleEditing}
						setIsEditing={setIsEditing}
						post={post}
					/>
				)}
			</div>
		</React.Fragment>
	);
};
export default BlogDetails;
