import React from 'react';

// Component de la liste des cartes
const List = (props) => {
	
	return (
		<ul>
			{/* On map sur le tableau de cartes pour afficher les questions et les réponses */}
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
