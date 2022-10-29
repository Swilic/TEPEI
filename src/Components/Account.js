import React from 'react';
import { Link } from 'react-router-dom';

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
