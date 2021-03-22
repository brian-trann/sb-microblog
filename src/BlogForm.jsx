import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import BlogContext from './common/BlogContext';

const BlogForm = ({
	addBlogPost,
	setIsEditing,
	editPost = { title: '', description: '', body: '' }
}) => {
	const INITIAL_STATE = {
		title       : editPost.title,
		description : editPost.description,
		body        : editPost.body
	};
	const { updateBlogPost } = useContext(BlogContext);

	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (editPost.id) {
			updateBlogPost({ ...formData, id: editPost.id });
			setIsEditing((status) => !status);
		} else {
			addBlogPost({ ...formData, id: uuid() });
			history.push('/');
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
				<div className='BlogForm-title h1'>{editPost.id ? 'Edit' : 'New'} Post</div>
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

						{editPost.id ? (
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
