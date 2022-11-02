import React from 'react';
import { Link } from 'react-router-dom';

import RenderedLists from '../Components/RenderedLists';

const Lists = () => {
	return (
		<div>
			<Link to='/creation'>Nouvelle liste</Link>
			<RenderedLists />
		</div>
	);
};

export default Lists;
