import React, { Fragment } from 'react';
import Account from '../Components/Account.js';
import Navigation from '../Components/Navigation.js';
import Profil from '../Components/Profil.js';

const HomeAuth = (props) => {
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
