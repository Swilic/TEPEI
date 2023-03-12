import React from 'react';
import { Link } from 'react-router-dom';

// Component des boutons de connexion et d'inscription
const Account = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/login'>Connexion</Link>
				</li>
				<li>
					<Link to='/sign'>S'inscire</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Account;
