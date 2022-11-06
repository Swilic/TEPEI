import React from 'react';
import { useLocation } from 'react-router-dom';

const List = () => {
	const location = useLocation();
	const state = Object.entries(location.state);
	console.log(state);

	return (
		<ul>
			{state.map((element, index) => {
				return (
					<li key={index}>
						<p>{element[0]}</p>
						<p>{element[1]}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
