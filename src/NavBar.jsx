import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
	const renderNavLinks = (
		<React.Fragment>
			<NavLink className='mr-1' to='/'>
				Blog
			</NavLink>{' '}
			|{' '}
			<NavLink className='ml-1' to='/new'>
				Add a new post
			</NavLink>
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<div className='NavBar-container'>
				<div className='NavBar-links'>{renderNavLinks}</div>
			</div>
		</React.Fragment>
	);
};
export default NavBar;
