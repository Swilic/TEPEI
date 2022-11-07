import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul className='navigation'>
				<li className='navElement'>
					<NavLink to='/'>Accueil</NavLink>
				</li>
				<li className='navElement'>
					<NavLink to='/lists'>Mes listes</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
