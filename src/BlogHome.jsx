import React from 'react';
import TitleList from './TitleList';

const BlogHome = () => {
	return (
		<React.Fragment>
			<div className='BlogHome-container container'>
				Welcome to <b>Microblog</b>, our innovative site for communicating on the
				superhighway.
			</div>
			<TitleList />
		</React.Fragment>
	);
};
export default BlogHome;
