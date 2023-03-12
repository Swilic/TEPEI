import React from 'react';
import HomeAuth from '../utils/HomeAuth.js';

const Home = () => {
	// Créer une clé user et connected dans le localStorage
	const user = localStorage.getItem('user');
	const connected = localStorage.getItem('connected');
	return (
		<div>
			{/* Salut la personne */}
			<div className='home'>
				<p className='helloName'>Hello {connected ? user : 'World'}!</p>
				<HomeAuth name={user} connected={connected} />
			</div>

			{/* Message selon si l'utilisateur est connecté ou non */}
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
