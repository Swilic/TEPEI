import React from 'react';
import logOut from '../utils/Logout.js';

const Profil = (props) => {
	return (
		<div>
			<div>{props.name}</div>
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
