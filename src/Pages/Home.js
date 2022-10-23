import React from 'react';
import Account from '../Components/Account.js';

const Home = () => {
	const user = localStorage.getItem('user');
	return (
		<div>
			<Account />
			<p>Hello {user ? user : 'World'}!</p>
		</div>
	);
};

export default Home;
