import React, { useContext, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import BlogContext from './common/BlogContext';
import BlogButtons from './BlogButtons';
import BlogForm from './BlogForm';
import CommentList from './CommentList';
import './BlogDetails.css';
const BlogDetails = () => {
	const { postId } = useParams();
	const { blogPosts, deleteBlogPost, addBlogComment, deleteBlogComment } = useContext(
		BlogContext
	);
	const [ isEditing, setIsEditing ] = useState(false);
	const handleEditing = () => {
		setIsEditing((status) => !status);
	};
	const handleDelete = (id) => {
		deleteBlogPost(id);
	};

	const filteredPost = blogPosts.filter((p) => p.id === postId);

	if (filteredPost.length === 0) return <Redirect to='/' />;
	const handleAddComment = (commentObj) => {
		const [ blogPostObj ] = filteredPost;
		addBlogComment(blogPostObj, commentObj);
		// text , id
	};
	const handleDeleteComment = (id) => {
		const [ blogPostObj ] = filteredPost;

		deleteBlogComment(blogPostObj, id);
	};

	const [ { title, description, body, id, comments } ] = filteredPost;
	const blogDetails = (
		<div className='BlogDetails-container container my-5'>
			<div className='BlogDetails-title h2'>{title}</div>
			<BlogButtons handleEditing={handleEditing} handleDelete={handleDelete} id={id} />
			<div className='BlogDetails-description lead'>
				<i>{description}</i>
			</div>
			<div className='BlogDetails-body my-3'>{body}</div>
			<hr />
			<CommentList
				comments={comments}
				handleAddComment={handleAddComment}
				handleDeleteComment={handleDeleteComment}
			/>
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
