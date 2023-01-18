import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import Navigation from '../Components/Navigation.js';
import ListsFetching from '../utils/ListsFetching.js';

const Lists = () => {
	// api qui récupère les listes de l'utilisateur
	const lists = ListsFetching();
	// hook pour naviguer entre les pages
	const nav = useNavigate();

	// Fonction pour retourner à la page d'étude
	const toStudy = (element) => {
		nav('/study', { state: element });
	};

	const deleteList = (title) => {
		axios('http://localhost:2999/user/list', {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: { title },
		}).then((res) => {
			// Si le token est invalide, on déconnecte l'utilisateur et on le redirige vers la page d'accueil
			if (res.data === 'Unvalid token!') {
				Logout();
				nav('/');
			}
			location.reload();
		});
	};
	return (
		<div>
			<Navigation />
			{/* Bouton qui redirige vers la page de création de liste */}
			<Link to='/creation' className='create'>
				Nouvelle liste
			</Link>
			<nav className='navLists'>
				<ul className='lists'>
					{/* Boucle pour afficher les listes */}
					{lists.map((element) => {
						return (
							<div className='wrapLists' key={element.title}>
								<li className='list'>
									{/* Bouton qui redirige vers la page de la liste */}
									<NavLink to='list' state={element}>
										<h2>{element.title}</h2>
									</NavLink>
									{/* Bouton qui supprime la liste */}
									<button
										onClick={() => {
											deleteList(element.title);
										}}>
										Supprimer
									</button>
								</li>
								{/* Bouton qui redirige vers la page d'étude */}
								<button
									className='play'
									onClick={() => toStudy(element)}>
									Apprendre
								</button>
							</div>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Lists;
