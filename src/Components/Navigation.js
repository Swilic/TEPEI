import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<ul>
				<li>
					<NavLink to='/'>Accueil</NavLink>
				</li>
				<li>
					<NavLink to='/lists'>Mes listes</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
