import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoBlogPosts from './NoBlogPosts';
import BlogDetails from './BlogDetails';
import BlogCard from './BlogCard';
import BlogHome from './BlogHome';
import NewBlogPost from './NewBlogPost';
const Routes = () => {
	const posts = useSelector((st) => st.posts);

	const renderBlogPosts = (posts) =>
		!!Object.keys(posts).length ? (
			Object.keys(posts).map((id) => (
				<div className='col-sm-6' key={id}>
					<BlogCard post={posts[id]} key={id} />
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
					<div className='row'>{renderBlogPosts(posts)}</div>
				</div>
			</Route>
			<Route exact path='/new'>
				<NewBlogPost />
			</Route>
			<Route exact path='/:postId'>
				<BlogDetails />
			</Route>
		</Switch>
	);
};
export default Routes;
