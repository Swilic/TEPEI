import React from 'react';
import { useLocation } from 'react-router-dom';

const Cards = () => {
	const location = useLocation();
	const state = Object.entries(location.state);
	return (
		<div>
			<ul>
				{state.map((element) => {
					return <div>{element}</div>;
				})}
			</ul>
		</div>
	);
};

export default Cards;
