import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BlogForm from './BlogForm';
import { addPostToApi } from './actions/posts';
const NewBlogPost = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const add = (post) => {
		dispatch(addPostToApi(post)).then(() => history.push('/'));
		// history.push('/');
	};
	return (
		<React.Fragment>
			<BlogForm add={add} />
		</React.Fragment>
	);
};
export default NewBlogPost;
