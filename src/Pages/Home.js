import React from 'react';
import HomeAuth from '../utils/HomeAuth.js';

const Home = () => {
	const user = localStorage.getItem('user');
	const connected = localStorage.getItem('connected');
	return (
		<div>
			<HomeAuth name={user} connected={connected} />
			<p>Hello {connected ? user : 'World'}!</p>
		</div>
	);
};

export default Home;
