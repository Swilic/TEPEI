import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Components/Navigation';

const List = () => {
	// Récupérer les données de la page précédente
	const position = useLocation();
	const questions = Object.entries(position.state.questions);

	// Api pour supprimer une question
	const deleteElement = (index) => {
		axios('http://localhost:2999/user/list', {
			method: 'PATCH',
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: {
				title: position.state.title,
				index: index,
			},
		}).then(() => {
			// Cache la question supprimée
			const list = document.querySelector(`.creationList${index}`);
			list.style.display = 'none';
		});
	};
	return (
		<div>
			<Navigation />
			<div className='wrapCenterList'>
				<ul className='centerList '>
					{/* Boucle et retourne les questions */}
					{questions.map((element, index) => {
						return (
							<li key={index} className={`creationList${index}`}>
								<p>
									<span className='dict'>Question:</span>{' '}
									{element[0]} <br />
									<span className='dict'>Response:</span>{' '}
									{element[1]}
								</p>
								<button
									onClick={() => {
										deleteElement(index);
									}}>
									Supprimer
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default List;
