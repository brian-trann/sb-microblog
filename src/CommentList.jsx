import React from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
const CommentList = ({ comments, handleAddComment, handleDeleteComment }) => {
	let isComments = !!comments.length;
	// will need to render comment list here.

	const renderComments = comments.map((c) => (
		<Comment comment={c} key={c.id} handleDeleteComment={handleDeleteComment} />
	));
	return (
		<React.Fragment>
			<div className='CommentList-container h4'>
				{isComments ? 'Comment List' : 'There are no comments yet!'}
			</div>
			<div>{isComments ? renderComments : null}</div>

			<CommentForm handleAddComment={handleAddComment} />
		</React.Fragment>
	);
};
export default CommentList;
