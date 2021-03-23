import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import BlogHome from './BlogHome';
import NewBlogPost from './NewBlogPost';
const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<div className='container'>
					<BlogHome />
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
