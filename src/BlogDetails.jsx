import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import BlogContext from './common/BlogContext';
import BlogButtons from './BlogButtons';
import './BlogDetails.css';
const BlogDetails = () => {
	const { postId } = useParams();
	const { blogPosts } = useContext(BlogContext);

	const filteredPost = blogPosts.filter((p) => p.id === postId);

	if (filteredPost.length === 0) return <Redirect to='/' />;
	const [ { title, description, body } ] = filteredPost;

	return (
		<React.Fragment>
			<div className='BlogDetails-container container my-5'>
				<div className='BlogDetails-title h4'>{title}</div>
				<BlogButtons />
				<div className='BlogDetails-description lead'>
					<i>{description}</i>
				</div>
				<div className='BlogDetails-body'>{body}</div>
			</div>
		</React.Fragment>
	);
};
export default BlogDetails;
