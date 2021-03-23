import React from 'react';
import { useDispatch } from 'react-redux';
import BlogForm from './BlogForm';
import { addPost } from './actions/posts';
const NewBlogPost = () => {
	const dispatch = useDispatch();

	const add = (post) => {
		dispatch(addPost(post));
	};
	return (
		<React.Fragment>
			<BlogForm add={add} />
		</React.Fragment>
	);
};
export default NewBlogPost;
