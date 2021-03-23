import React from 'react';
import './App.css';
import Home from './Home';
import Routes from './Routes';

function App() {
	return (
		<React.Fragment>
			<div className='App-container'>
				<Home />
			</div>
			<Routes />
		</React.Fragment>
	);
}

export default App;
