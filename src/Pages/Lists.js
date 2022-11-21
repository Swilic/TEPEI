import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import Navigation from '../Components/Navigation.js';
import ListsFetching from '../utils/ListsFetching.js';

const Lists = () => {
	const lists = ListsFetching();
	const nav = useNavigate();

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
			<Link to='/creation' className='create'>
				Nouvelle liste
			</Link>
			<nav className='navLists'>
				<ul className='lists'>
					{lists.map((element) => {
						return (
							<div className='wrapLists' key={element.title}>
								<li className='list'>
									<NavLink to='list' state={element}>
										<h2>{element.title}</h2>
									</NavLink>
									<button
										onClick={() => {
											deleteList(element.title);
										}}>
										Supprimer
									</button>
								</li>
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
