import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation.js';
import RenderedLists from '../Components/RenderedLists.js';

const Lists = () => {
	return (
		<div>
			<Navigation />
			<Link to='/creation' className='create'>Nouvelle liste</Link>
			<RenderedLists />
		</div>
	);
};

export default Lists;
