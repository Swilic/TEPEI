import React from 'react';
import { NavLink } from 'react-router-dom';
import ListsFetching from '../utils/ListsFetching';

const RenderedLists = () => {
	const lists = ListsFetching();
	return (
		<ul>
			{lists.map((element) => {
				return (
					<li key={element.Title}>
						<NavLink to='list' state={element.dict}>
							<h2>{element.Title}</h2>
						</NavLink>
						<button>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export default RenderedLists;
