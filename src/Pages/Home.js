import React from 'react';
import Account from '../Components/Account.js';
import Navigation from '../Components/Navigation.js';
import Profil from '../Components/Profil.js';

const Home = () => {
	const user = localStorage.getItem('user');
	const connected = localStorage.getItem('connected');
	return (
		<div>
			{connected ? <Profil name={user} /> : <Account />}
			<Navigation />
			<p>Hello {connected ? user : 'World'}!</p>
		</div>
	);
};

export default Home;
