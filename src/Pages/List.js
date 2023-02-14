import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Components/Navigation';

const List = () => {
	// Récupérer les données de la page précédente
	const position = useLocation();
	const [questions, setQuestions] = useState([]);
	const [length, setLength] = useState(0);

	// Api pour prendre les questions de la liste qui se lancera au chargement de la page et à chaque fois que length change
	useEffect(() => {
		axios('http://localhost:2999/user/titleList', {
			method: 'POST',
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: {
				title: position.state.title,
			},
		}).then((res) => {
			setQuestions(Object.entries(res.data));
		});
	}, [length]);

	// Api pour supprimer une question
	const deleteElement = (index) => {
		axios('http://somehting.onrender.com/user/list', {
			method: 'PATCH',
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: {
				title: position.state.title,
				index: index,
			},
		}).then(() => {
			setLength(length + 1);
			// Cache la question supprimée
			// const list = document.querySelector(`.creationList${index}`);
			// list.style.display = 'none';
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
							<li
								key={index}
								className={`creationList${index}`}>
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
