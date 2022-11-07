import React from 'react';
import HomeAuth from '../utils/HomeAuth.js';

const Home = () => {
	const user = localStorage.getItem('user');
	const connected = localStorage.getItem('connected');
	return (
		<div className='home'>
			<p className='helloName'>Hello {connected ? user : 'World'}!</p>
			<HomeAuth name={user} connected={connected} />
		</div>
	);
};

export default Home;
