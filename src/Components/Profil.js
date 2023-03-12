import React from 'react';
import logOut from '../utils/Logout.js';

const Profil = () => {
	return (
		// Bouton de déconnexion
		<div className='profile'>
			<button
				onClick={() => {
					logOut();
				}}>
				Deconnexion!
			</button>
		</div>
	);
};

export default Profil;
