import React from 'react';
import HomeAuth from '../utils/HomeAuth.js';

const Home = () => {
	const user = localStorage.getItem('user');
	const connected = localStorage.getItem('connected');
	return (
		<div>
			<div className='home'>
				<p className='helloName'>Hello {connected ? user : 'World'}!</p>
				<HomeAuth name={user} connected={connected} />
			</div>

			{!connected ? (
				<p className='connectionMessage'>
					Bonjour, vous n'êtes actuellement pas connecté. <br />
					Vous pouvez créer un compte simplement
				</p>
			) : (
				<p className='connectionMessage'>
					Bonjour, vous êtes connecté. <br />
					Amusez-vous bien!
				</p>
			)}
		</div>
	);
};

export default Home;
