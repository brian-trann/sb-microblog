import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Comment.css';
const Comment = ({ comment, handleDeleteComment }) => {
	const { text, id } = comment;

	return (
		<React.Fragment>
			<p>
				<FontAwesomeIcon
					className='Comment-times mr-2'
					icon={faTimes}
					onClick={() => handleDeleteComment(id)}
				/>
				{text}
			</p>
		</React.Fragment>
	);
};
export default Comment;
