import React from 'react';

const List = (props) => {
	return (
		<ul>
			{props.card.map((element, index) => {
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
