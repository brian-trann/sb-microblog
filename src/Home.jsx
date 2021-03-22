import React from 'react';
import NavBar from './NavBar';

const Home = () => {
	return (
		<React.Fragment>
			<div className='Home-container container jumbotron my-5'>
				<div className='Home-title display-4'>Microblog</div>
				<div className='Home-body lead my-3'>Got in the Rithm of blogging!</div>
				<NavBar />
			</div>
		</React.Fragment>
	);
};
export default Home;
