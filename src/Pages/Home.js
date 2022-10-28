import React from 'react';
import Account from '../Components/Account.js';
import Profil from '../Components/Profil.js';

const Home = () => {
	const user = localStorage.getItem('user');
	const connected = localStorage.getItem('connected');
	return (
		<div>
			<div>
				{connected ? <Profil name={user} /> : <Account />}
			</div>
			<p>Hello {connected ? user : 'World'}!</p>
		</div>
	);
};

export default Home;
