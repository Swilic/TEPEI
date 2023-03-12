import React, { Fragment } from 'react';
import Account from '../Components/Account.js';
import Navigation from '../Components/Navigation.js';
import Profil from '../Components/Profil.js';

const HomeAuth = (props) => {
	// Si l'utilisateur est connecté, return le composant Profil, sinon return le composant Account
	if (props.connected) {
		return (
			<Fragment>
				<Navigation />
				<Profil />
			</Fragment>
		);
	} else {
		return <Account />;
	}
};

export default HomeAuth;
