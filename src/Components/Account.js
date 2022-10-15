import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/sign'>Connexion</Link>
				</li>
				<li>
					<Link to='sign'>S'inscire</Link>
				</li>
			</ul>
		</div>
	);
};

export default Account;
