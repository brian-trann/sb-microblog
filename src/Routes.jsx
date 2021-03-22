import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogForm from './BlogForm';
import NoBlogPosts from './NoBlogPosts';
import BlogContext from './common/BlogContext';
import BlogDetails from './BlogDetails';
import BlogCard from './BlogCard';
import BlogHome from './BlogHome';
const Routes = ({ addBlogPost }) => {
	const { blogPosts } = useContext(BlogContext);

	const renderBlogPosts = (blogPosts) =>
		!!blogPosts.length ? (
			blogPosts.map((post) => (
				<div className='col-sm-6' key={post.id}>
					<BlogCard post={post} key={post.id} />
				</div>
			))
		) : (
			<NoBlogPosts />
		);

	return (
		<Switch>
			<Route exact path='/'>
				<div className='container'>
					<BlogHome />
					<div className='row'>{renderBlogPosts(blogPosts)}</div>
				</div>
			</Route>
			<Route exact path='/new'>
				<BlogForm addBlogPost={addBlogPost} />
			</Route>
			<Route exact path='/:postId'>
				<BlogDetails />
			</Route>
		</Switch>
	);
};
export default Routes;
