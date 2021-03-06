import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import './BlogButtons.css';
const BlogButtons = ({ handleEditing, handleDelete, id }) => {
	return (
		<div className='BlogButtons container text-right'>
			<span className='mr-2 BlogButtons-edit'>
				<FontAwesomeIcon icon={faEdit} onClick={() => handleEditing(id)} />
			</span>
			<span className='ml-2 BlogButtons-times'>
				<FontAwesomeIcon icon={faTimes} onClick={() => handleDelete(id)} />
			</span>
		</div>
	);
};
export default BlogButtons;
