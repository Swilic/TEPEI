import React from 'react';
import logOut from '../utils/Logout';

function Profil(props) {
	const deconnected = function(){
		logOut('home');
	}
	return (
		<div>
			<div>{props.name}</div>
			<button onClick={deconnected}>Deconnexion!</button>
		</div>
	);
}

export default Profil;
