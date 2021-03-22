import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
const CommentForm = ({ handleAddComment }) => {
	const INITIAL_STATE = { text: '' };
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddComment({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((fData) => ({ ...fData, [name]: value }));
	};

	return (
		<React.Fragment>
			<div className='CommentForm-container '>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='text' />
						<input
							type='text'
							className='form-control'
							id='text'
							name='text'
							placeholder='Add Comment'
							value={formData.text}
							onChange={handleChange}
						/>
					</div>
					<button className='btn btn-info'>Add Comment</button>
				</form>
			</div>
		</React.Fragment>
	);
};
export default CommentForm;
