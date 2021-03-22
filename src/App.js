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
	return (
		<BrowserRouter>
			<BlogContext.Provider value={{ blogPosts }}>
				<div className='App-container'>
					<Home />
				</div>
				<Routes addBlogPost={addBlogPost} />
			</BlogContext.Provider>
		</BrowserRouter>
	);
}

export default App;
