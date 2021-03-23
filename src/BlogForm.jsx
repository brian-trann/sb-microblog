import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { updatePostToApi } from './actions/posts';
const BlogForm = ({
	add,
	setIsEditing,
	post = { title: '', description: '', body: '', comments: [] }
}) => {
	const INITIAL_STATE = {
		title       : post.title,
		description : post.description,
		body        : post.body,
		comments    : post.comments
	};

	const { postId } = useParams();

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();

		if (postId) {
			console.log({ ...formData });
			dispatch(updatePostToApi({ ...formData, id: postId }));
			setIsEditing((status) => !status);
		} else {
			add({ ...formData });
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((fData) => ({ ...fData, [name]: value }));
	};
	const handleCancelEdit = () => setIsEditing((status) => !status);

	return (
		<React.Fragment>
			<div className='BlogForm-container container'>
				<div className='BlogForm-title h1'>{postId ? 'Edit' : 'New'} Post</div>
				<div className='BlogForm-form'>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label htmlFor='title'>Title:</label>
							<input
								type='text'
								className='form-control'
								id='title'
								name='title'
								placeholder='Title'
								value={formData.title}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='description'>Description:</label>
							<input
								type='text'
								className='form-control'
								id='description'
								name='description'
								placeholder={formData.body}
								value={formData.description}
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='body'>Body:</label>
							<textarea
								type='text'
								className='form-control'
								id='body'
								name='body'
								placeholder={formData.body}
								value={formData.body}
								onChange={handleChange}
							/>
						</div>

						{postId ? (
							<button className='btn btn-secondary mr-2' onClick={handleCancelEdit}>
								Cancel Edit
							</button>
						) : (
							<NavLink to='/' className='btn btn-secondary mr-2'>
								Cancel
							</NavLink>
						)}
						<button className='btn btn-primary ml-2'>Submit</button>
					</form>
				</div>
				<pre>{JSON.stringify(formData, null, 2)}</pre>
			</div>
		</React.Fragment>
	);
};

export default BlogForm;
