import React from 'react';
import logOut from '../utils/Logout.js';

const Profil = () => {
	return (
		<div className='profile'>
			<button
				onClick={() => {
					logOut('home');
				}}>
				Deconnexion!
			</button>
		</div>
	);
};

export default Profil;
