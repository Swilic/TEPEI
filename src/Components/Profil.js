import React from 'react';

function Profil(props) {
	const logOut = function () {
		localStorage.clear();
		location.reload();
	};
	return (
		<div>
			<div>{props.name}</div>
			<button onClick={logOut}>Deconnexion!</button>
		</div>
	);
}

export default Profil;
