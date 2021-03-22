import React, { useContext, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import BlogContext from './common/BlogContext';
import BlogButtons from './BlogButtons';
import BlogForm from './BlogForm';
import './BlogDetails.css';
const BlogDetails = () => {
	const { postId } = useParams();
	const { blogPosts, deleteBlogPost } = useContext(BlogContext);
	const [ isEditing, setIsEditing ] = useState(false);
	const handleEditing = () => {
		setIsEditing((status) => !status);
	};
	const handleDelete = (id) => {
		deleteBlogPost(id);
	};
	const filteredPost = blogPosts.filter((p) => p.id === postId);

	if (filteredPost.length === 0) return <Redirect to='/' />;
	const [ { title, description, body, id } ] = filteredPost;

	const blogDetails = (
		<div className='BlogDetails-container container my-5'>
			<div className='BlogDetails-title h4'>{title}</div>
			<BlogButtons handleEditing={handleEditing} handleDelete={handleDelete} id={id} />
			<div className='BlogDetails-description lead'>
				<i>{description}</i>
			</div>
			<div className='BlogDetails-body'>{body}</div>
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
						editPost={{ title, description, id, body }}
					/>
				)}
			</div>
		</React.Fragment>
	);
};
export default BlogDetails;
