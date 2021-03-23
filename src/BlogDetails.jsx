import React, { useState } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, addComment, deleteComment } from './actions/posts';
import BlogButtons from './BlogButtons';
import BlogForm from './BlogForm';
import CommentList from './CommentList';
import './BlogDetails.css';
const BlogDetails = () => {
	const { postId } = useParams();
	const dispatch = useDispatch();
	const post = useSelector((st) => st.posts[postId]);
	const history = useHistory();
	const [ isEditing, setIsEditing ] = useState(false);
	const handleEditing = () => {
		setIsEditing((status) => !status);
	};
	const handleDelete = (id) => {
		dispatch(deletePost(id));
		history.push('/');
	};

	if (!post) return <Redirect to='/' />;

	const handleAddComment = (commentObj) => {
		dispatch(addComment(postId, commentObj));
	};
	const handleDeleteComment = (commentId) => {
		dispatch(deleteComment(postId, commentId));
	};

	const { title, description, body, id, comments } = post;
	const blogDetails = (
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

	return (
		<React.Fragment>
			<div>
				{!isEditing ? (
					<React.Fragment>{blogDetails}</React.Fragment>
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
