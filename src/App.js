import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import BlogContext from './common/BlogContext';

function App() {
	const [ blogPosts, setBlogPosts ] = useState([]);
	const addBlogPost = (formData) => {
		setBlogPosts((oldPosts) => [ ...oldPosts, formData ]);
	};
	const updateBlogPost = (formData) => {
		const oldBlogPosts = blogPosts.filter((post) => post.id !== formData.id);
		setBlogPosts([ ...oldBlogPosts, formData ]);
	};
	const deleteBlogPost = (id) => {
		const oldBlogPosts = blogPosts.filter((post) => post.id !== id);
		setBlogPosts([ ...oldBlogPosts ]);
	};
	return (
		<BrowserRouter>
			<BlogContext.Provider value={{ blogPosts, updateBlogPost, deleteBlogPost }}>
				<div className='App-container'>
					<Home />
				</div>
				<Routes addBlogPost={addBlogPost} />
			</BlogContext.Provider>
		</BrowserRouter>
	);
}

export default App;
