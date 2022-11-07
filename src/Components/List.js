import React from 'react';

const List = (props) => {
	
	return (
		<ul>
			{props.card.map((element, index) => {
				return (
					<li key={index} className='creationList'>
						<p><span className='dict'>Question:</span> {element[0]} <br />
						<span className='dict'>Response:</span> {element[1]}
						</p>
					</li>
				);
			})}
		</ul>
	);
};

export default List;
